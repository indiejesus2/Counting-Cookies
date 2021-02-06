import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {addRecord} from '../actions/addRecord'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'

class DailyRecordsContainer extends Component {

    // componentDidUpdate(prevProps) {
    //     debugger
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger
    // }

    render() {
        return (
            <div>
                <Route direct path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} records={this.props.records}/>}/>
                <DailyRecordInput user={this.props.user} addRecord={this.props.addRecord} />
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
    addRecord: record => dispatch(addRecord(record))
})

export default connect(mapStateToProps, mapDispatchToProps)(DailyRecordsContainer)