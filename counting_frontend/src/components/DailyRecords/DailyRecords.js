import React, { Component } from 'react'


class DailyRecords extends Component {

    render() { 
    
        const records = this.props.records
        return (
            <div>
                <h4>Daily Records</h4>
                {records.map(record => 
                    <li key={record.id}>{record.date}</li>
                    )}
            </div>
        )
    }
}

export default DailyRecords
