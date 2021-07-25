// import React, { Component } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Upvote from './voteRecord'
import {addVote} from '../../actions/addVote'
import {selectDate} from '../../actions/selectDate'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DailyRecords extends Component {

    handleDayClick = (day) => {
        this.props.selectDate(day.toJSON().split("T")[0])
    }

    render() {
        return (
            <div class="dailyrecords">
                <DayPicker class="calendar" selectedDays={this.props.vinyl.map(date => new Date(date))} onDayClick={this.handleDayClick} />
                <br />
                <div class="records">
                    <h4>Daily Records</h4>
                    <ul>
                    {this.props.sorted.map(record => 
                        <li id={record.id} key={record.id}>
                            <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link>
                            <Upvote record={record} addVote={this.props.addVote} />
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        )    
    }
    
}

const mapStateToProps = state => {
    return {
        vinyl: state.recordsReducer.records.map(record => record.date),
        sorted: state.recordsReducer.records.sort((a,b) => (b.vote > a.vote) ? 1 : -1)
    }
}

export default connect( mapStateToProps, { addVote, selectDate })(DailyRecords)
