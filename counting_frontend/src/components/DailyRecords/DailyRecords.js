// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Upvote from './voteRecord'
import {addVote} from '../../actions/addVote'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'



// class DailyRecords extends Component {
    const DailyRecords = (props) => {
    // handleUpvote = (event) => {
    //     const record = this.props.records.filter(record => record.id == event.target.id)[0]
    //     const newVote = record.vote + 1
    //     this.setState({

    //     })
    //     this.props.editRecord(record)

    // }
    const sorted = props.records.sort((a,b) => (b.vote > a.vote) ? 1 : -1)
    const selected = props.records.map(record => record.date.split("-").join())
    debugger
        return (
            <div>
                {selected.forEach(select => 
                    <DayPicker selectedDays={[new Date(select)]} />
                )}
                <br />
                <h4>Daily Records</h4>
                {sorted.map(record => 
                    <li id={record.id} key={record.id}>
                        <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link>
                        <Upvote record={record} addVote={props.addVote} />
                    </li>
                    )}
            </div>
        )    
    }

export default connect(null, { addVote })(DailyRecords)
