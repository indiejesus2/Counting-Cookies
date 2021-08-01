import React,  {Component } from 'react';
import DayPicker from 'react-day-picker';
import {Link} from 'react-router-dom'
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';



class Calendar extends Component {
    renderDay = (day) => {
        let date = day.toJSON().split("T")[0]
        debugger
        const dateStyle = {
            position: 'absolute',
            color: 'lightgray',
            bottom: 0,
            right: 0,
            fontSize: 20,
          };
          const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' };
          const cellStyle = {
            height: 50,
            width: 60,
            position: 'relative',
          };
        return (
            <div style={cellStyle}>
                <div style={dateStyle}>{date[8] + date[9]}</div>
                {this.props.records.map(function(record) {
                    if (record.date == date) {
                        return (
                        <div style={birthdayStyle}>
                            <Link to={`/users/${record.user_id}/records/${record.id}`}>Cookie</Link>
                        </div>
                        )
                    }
                })}
            </div>
        )
    }
    render() {
        return (
            <DayPicker class="calendar" selectedDays={this.props.records.map(date => new Date(date))} renderDay={this.renderDay} />
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