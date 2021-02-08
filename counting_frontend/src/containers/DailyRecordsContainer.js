import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {fetchRecords} from '../actions/fetchRecords'
import {addRecord} from '../actions/addRecord'
import {editRecord} from '../actions/editRecord'
import DailyRecord from '../components/DailyRecords/DailyRecord'
import DailyRecordInput from '../components/DailyRecords/DailyRecordInput'
import DailyRecords from '../components/DailyRecords/DailyRecords'

class DailyRecordsContainer extends Component {

    componentDidUpdate(prevProps, prevState){
        if(this.props.records.length !== prevProps.records.length) {
            debugger
            this.props.fetchUsers()
            this.props.fetchRecords(this.props.user)
        }
    }

    render() {
        return (
            <div>
                <Route direct path='/users/:id/records/:record_id' render={(routerProps) => <DailyRecord {...routerProps} user={this.props.user} records={this.props.records}/>}/>
                <DailyRecordInput user={this.props.user} addRecord={this.props.addRecord} editRecord={this.props.editRecord}/>
                <DailyRecords records={this.props.records} user={this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users.map(user => user.attributes),
        records: state.recordsReducer.records.map(record => record.attributes)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    addRecord: record => dispatch(addRecord(record)),
    fetchRecords: user => dispatch(fetchRecords(user)),
    editRecord: record => dispatch(editRecord(record))
})


export default connect(mapStateToProps, mapDispatchToProps)(DailyRecordsContainer)