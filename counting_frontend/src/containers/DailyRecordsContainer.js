import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchRecords} from '../actions/fetchRecords'
import {addRecord} from '../actions/addRecord'
import {editRecord} from '../actions/editRecord'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'

class DailyRecordsContainer extends Component {

    componentDidUpdate(prevProps) {
        debugger
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props == nextProps) {
            debugger
            return true
        } else {
            debugger
            this.props.fetchRecords(this.props.user)
        }
    }

    render() {
        return (
            <div>
                <Route direct path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} records={this.props.records}/>}/>
                <DailyRecordInput user={this.props.user} addRecord={this.props.addRecord} editRecord={this.props.editRecord}/>
                <DailyRecords records={this.props.records} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records.map(record => record.attributes)
    }
}

const mapDispatchToProps = dispatch => ({
    addRecord: record => dispatch(addRecord(record)),
    fetchRecords: user => dispatch(fetchRecords(user)),
    editRecord: record => dispatch(editRecord(record))
})


export default connect(mapStateToProps, mapDispatchToProps)(DailyRecordsContainer)