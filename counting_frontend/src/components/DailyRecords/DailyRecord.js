import React, { Component } from 'react'
import {Route, Link, useHistory} from 'react-router-dom'

class DailyRecord extends Component {
    
    handleClick = (record) => {
        this.props.deleteRecord(record)
        this.props.history.push(`/users/${this.props.user.id}`)
    }

    handleItemClick = (item) => {
        this.props.deleteItem(item, this.props.user.id)
    }

    render() { 

        const record = this.props.records.filter(record => record.id == this.props.match.params.record_id)[0]
        const days = record.days.filter(day => day.record_id === record.id)
        return (
            <div>
                <h1>{record.date}</h1>
                <button onClick={() => {this.handleClick(record)} }>Delete Day</button>
                <h3>Daily Total: {record.daily_total}</h3>
                <h3>Daily Allowance: {record.daily_allowance}</h3>
                {days.map(day => 
                    <li key={day.id}>
                        {day.item_name} - {day.item_calories}
                        <button onClick={() => {this.handleItemClick(day)} }>X</button>
                    </li>
                    )}
            </div>
        )
    }
}

export default DailyRecord
