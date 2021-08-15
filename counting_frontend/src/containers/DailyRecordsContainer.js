import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import {addRecord} from '../actions/addRecord'
import {editRecord} from '../actions/editRecord'
import {deleteRecord} from '../actions/deleteRecord'
import {deleteItem} from '../actions/deleteItem'
import {fetchRecords} from '../actions/fetchRecords'
import Spinner from 'react-bootstrap/Spinner'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'


class DailyRecordsContainer extends Component {

    // componentDidUpdate(prevProps) {
    //     if (this.props.records.length > prevProps.records.length) {
    //         this.props.fetchRecords(this.props.user)
    //         this.checkedOut()
    //     }
    // }

    componentDidMount() {
        this.props.fetchRecords(this.props.user)

    }

    constructor(props) {
        super(props);
        this.state = {
            displayedComponent: "List"
        };
    }

    toggleBox = (e) => {
        var display = this.state.displayedComponent === "List" ? "Calendar" : "List"
        console.log(this.state.displayedComponent)
        this.setState({
            displayedComponent: display
        })
        console.log(this.state.displayedComponent)
    }

    checkedOut = () => {
        let slider = document.getElementById("slider")
        if (this.state.displayedComponent === "Calendar") {
            slider.click()
        }
    }

    render() {
        if (this.props.loading === false) {
            return (
                <div>
                    <div className="toggle">
                        <label className="switch">
                            <input type="checkbox" onChange={this.toggleBox} />
                            <span id="slider">Calendar</span>
                        </label>

                    </div>
                    <Route path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} records={this.props.records} deleteRecord={this.props.deleteRecord} deleteItem={this.props.deleteItem} />}/>
                    <DailyRecords records={this.props.records} editRecord={this.props.editRecord} user={this.props.user} displayedComponent={this.state.displayedComponent}/>
                    <DailyRecordInput user={this.props.user} date={this.props.date} records={this.props.records} addRecord={this.props.addRecord} editRecord={this.props.editRecord} />
                </div>
            )
        } else {
            return (
                <div className="spinner">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
        )}
    }
}

const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records,
        loading: state.recordsReducer.loading,
        date: state.recordsReducer.date,
        display: state.displayedComponent
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRecords: user => dispatch(fetchRecords(user)),
    addRecord: record => dispatch(addRecord(record)),
    editRecord: (record, vote) => dispatch(editRecord(record, vote)),
    deleteRecord: record => dispatch(deleteRecord(record)),
    deleteItem: (item, user_id) => dispatch(deleteItem(item, user_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DailyRecordsContainer)