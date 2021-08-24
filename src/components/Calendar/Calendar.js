import React,  {Component } from 'react';
import DayPicker from 'react-day-picker';
import {Link} from 'react-router-dom'
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { selectDate } from '../../actions/selectDate';



class Calendar extends Component {
    renderDay = (day) => {
        let date = day.toJSON().split("T")[0]
        const dateStyle = {
            position: 'absolute',
            color: 'black',
            top: 0,
            left: 0,
            fontSize: 20            
          };
          const birthdayStyle = { fontSize: '0.8em', textAlign: 'left', 
          position: 'absolute',
          bottom: '0px',
          right: '0px',
        };
          const cellStyle = {
            height: 50,
            width: 60,
            position: 'relative',
          };
        return (
            <div style={cellStyle}>
                {this.props.records.forEach(function(record) {
                    if (record.date === date) {
                        return (
                        <div style={birthdayStyle}>
                            <Link to={`/users/${record.user_id}/records/${record.id}`}>Cookie</Link>
                        </div>
                        )
                    }
                })}
                <div style={dateStyle}>{date[8] + date[9]}</div>

            </div>
        )
    }

    handleDayClick = (day) => {
        let date = day.toJSON().split("T")[0]
        this.props.selectDate(date)
    }

    render() {
        return (
            <DayPicker class="calendar" selectedDays={this.props.records.map(date => new Date(date))} renderDay={this.renderDay}  onDayClick={this.handleDayClick}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        vinyl: state.recordsReducer.records.map(record => record.date)
    }
}

export default connect (mapStateToProps, {selectDate})(Calendar)
