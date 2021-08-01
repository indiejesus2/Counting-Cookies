import React,  {Component } from 'react';
import DayPicker from 'react-day-picker';
import {Link} from 'react-router-dom'
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';



class Calendar extends Component {
    // 
    render() {
        return (
            <DayPicker class="calendar" selectedDays={this.props.records.map(date => new Date(date))}  />
        )
    }
}

const mapStateToProps = state => {
    return {
        vinyl: state.recordsReducer.records.map(record => record.date)
    }
}

export default connect (mapStateToProps)(Calendar)

// onDayClick={this.handleDayClick}