import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addRecord} from '../actions/addRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'

class DailyRecordsContainer extends Component {

    render() {
        return (
            <div>
                <DailyRecords records={this.props.user.daily_records} />
                <DailyRecordInput user={this.props.user} addRecord={this.props.addRecord} />
            </div>
        )
    }

}

export default connect(null, {addRecord})(DailyRecordsContainer)