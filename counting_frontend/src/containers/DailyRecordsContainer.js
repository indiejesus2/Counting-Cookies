import React, { Component } from 'react'
import { connect } from 'react-redux'

class DailyRecordsContainer extends Component {

    render() { 

        const records = this.props.user.daily_records
        debugger
        return (
            <div>
                <h4>Daily Records</h4>
                
            </div>
        )
    }
}

export default DailyRecordsContainer