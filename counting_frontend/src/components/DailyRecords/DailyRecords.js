import React from 'react'
import {Link} from 'react-router-dom'


const DailyRecords = props => {
    return (
        <div>
            <h4>Daily Records</h4>
            {props.records.map(record => 
                <li key={record.id}>
                    <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link>
                </li>
                )}
        </div>
    )
}

export default DailyRecords
