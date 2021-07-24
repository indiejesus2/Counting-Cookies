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
    const records = props.records.map(record => record.date)
    const vinyl = records.map(record => record.split("-"))
    for (let i = 0; i<vinyl.length; i++) {
        let x = 0
        while (x<3) {
            vinyl[i].splice(x, 1, Number(vinyl[i][x]))
            x++
        }
    }
        return (
            <div>
                {/* <DayPicker selectedDays={[new Date(`${Number(select[0])}, ${Number(select[1])}, ${Number(select[2])}`)]} /> */}
                <DayPicker selectedDays={vinyl.map(date => new Date(date))} />
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
