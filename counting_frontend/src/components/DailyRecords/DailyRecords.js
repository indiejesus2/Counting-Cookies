import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import DailyRecord from './DailyRecord'



class DailyRecords extends Component {

    render() { 
        const records = this.props.records.filter(record => record.user_id === this.props.user.id)
        return (
            <div>
                <h4>Daily Records</h4>
                {records.map(record => 
                    <li key={record.id}>
                        <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link>
                    </li>
                    )}
            </div>
        )
    }
}

export default DailyRecords
