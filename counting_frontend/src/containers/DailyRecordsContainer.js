import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchRecords} from '../actions/fetchRecords'
import {addRecord} from '../actions/addRecord'
import {editRecord} from '../actions/editRecord'
import {deleteRecord} from '../actions/deleteRecord'
import {deleteItem} from '../actions/deleteItem'
import Spinner from 'react-bootstrap/Spinner'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'


class DailyRecordsContainer extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.handleDayClick = this.handleDayClick.bind(this);
    //     this.state = {
    //         selectedDays: [],
    //     };
    // }

    componentDidMount() {
        this.props.fetchRecords(this.props.user)
        // this.handleCalendar(this.props.user.attributes.records)
    }

    // handleCalendar(days) {
    //     // const selectedDays = this.state.selectedDays.concat();
    //     // debugger
    //         days.forEach(day =>
    //             this.setState({
    //                 selectedDays: [...this.state.selectedDays, day.date]
    //             })
    //         )
    //             // selectedDays.push(day.date) 
    //     // this.setState({ selectedDays })
    //     // debugger
    // }

    render() {
        if (this.props.loading === false) {
            return (
                <div>
                    <Route direct path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} records={this.props.records} deleteRecord={this.props.deleteRecord} deleteItem={this.props.deleteItem} />}/>
                    <DailyRecords records={this.props.records} editRecord={this.props.editRecord}/>
                    <Route direct path='/users/:id/addrecord' render={(routerProps) => <DailyRecordInput {...routerProps} user={this.props.user} records={this.props.records} addRecord={this.props.addRecord} editRecord={this.props.editRecord}/>} />
                </div>
            )
        } else {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
        )}
    }
}

const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records.map(record => record.attributes),
        loading: state.recordsReducer.loading
    }
}

const mapDispatchToProps = dispatch => ({
    addRecord: record => dispatch(addRecord(record)),
    fetchRecords: user => dispatch(fetchRecords(user)),
    editRecord: (record, vote) => dispatch(editRecord(record, vote)),
    deleteRecord: record => dispatch(deleteRecord(record)),
    deleteItem: (item, user_id) => dispatch(deleteItem(item, user_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DailyRecordsContainer)