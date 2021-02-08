import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

class DailyRecord extends Component {

    render() { 
        const record = this.props.records.filter(record => record.id == this.props.match.params.record_id)[0]
        const days = record.days.filter(day => day.record_id === record.id)
        return (
            <div key={record.id}>
                <h1>{record.date}</h1>
                <h3>Daily Total: {record.daily_total}</h3>
                <h3>Daily Allowance: {record.daily_allowance}</h3>
                {days.map(day => 
                    <li key={day.id}>
                        {day.item_name} - {day.item_calories}
                    </li>
                    )}
            </div>
        )
    }
}

export default DailyRecord
