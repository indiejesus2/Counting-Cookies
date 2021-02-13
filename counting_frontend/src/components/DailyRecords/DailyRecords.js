import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import DailyRecord from './DailyRecord'



class DailyRecords extends Component {

    render() { 
        debugger
        const records = this.props.records
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
