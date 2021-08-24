import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import {selectDate} from '../../actions/selectDate'
import 'react-day-picker/lib/style.css'

class DailyRecords extends Component {

    renderComponent() {
        switch(this.props.displayedComponent) {
            case "Calendar":
                return <Calendar className="calendar" records={this.props.records} />
            case "List":
                return this.renderList()
            default:
                return this.renderList()
        }
    }

    renderList() {
        return(
        <div class="records">
        <h4>Daily Records</h4>
        <ul>
        {this.props.sorted.map(record => 
            <li id={record.id} key={record.id}>
                <Link to={`/users/${record.user_id}/records/${record.id}`} >{record.date}</Link>
            </li>
            )}
        </ul>
    </div>
        )
    }

    render() {

        return (
            <div class="dailyrecords">
                {this.renderComponent()}
            </div>
        )    
    }
    
}

const mapStateToProps = state => {
    return {
        sorted: state.recordsReducer.records.sort((a,b) => (b.date < a.date) ? 1 : -1)
    }
}

export default connect( mapStateToProps, { selectDate })(DailyRecords)
