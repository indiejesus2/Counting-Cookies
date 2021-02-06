import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'



class DailyRecord extends Component {

    render() { 
        debugger
        const record = this.props.user.records.filter(record => record.id == this.props.match.params.record_id)[0]
        const days = this.props.user.days.filter(day => day.record_id == this.props.match.params.record_id)
        debugger

        return (
            <div>
                <h1>{record.date}</h1>
                {days.map(day => 
                    <li key={day.id}>
                        {day.item_name} - {day.item_calories}
                        {/* <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link> */}
                    </li>
                    )}
            </div>
        )
    }
}

export default DailyRecord
