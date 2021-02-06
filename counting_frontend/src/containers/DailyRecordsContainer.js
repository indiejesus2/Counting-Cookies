import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import {addRecord} from '../actions/addRecord'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'

class DailyRecordsContainer extends Component {

    render() {
        return (
            <div>
                <Route direct path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} />}/>
                <DailyRecordInput user={this.props.user} addRecord={this.props.addRecord} />
                <DailyRecords records={this.props.user.records} />
            </div>
        )
    }

}

export default connect(null, {addRecord})(DailyRecordsContainer)