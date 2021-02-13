import React, { Component } from 'react'
import {connect} from 'react-redux'

class DailyRecordInput extends Component {

    state = {
        date: "",
        item_name: "",
        item_calories: "",
        user_id: this.props.user.id,
        record_id: 0
    }
    
    checkRecord(date) {
        const record = this.props.records.filter(record => record.date === date)[0]
        if(record) {
            this.setState({
                record_id: record.id
            })
        }
    }
    
    clearState() {
        this.setState({
            date: "",
            item_name: "",
            item_calories: ""
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.checkRecord(this.state.date)
    }


    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.record_id === 0) {
            this.props.addRecord(this.state)
            this.clearState()
        } else {
            this.props.editRecord(this.state)
            this.clearState()
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date: </label>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleChange}/>
                    <label>Item Name: </label>
                    <input type="text" value={this.state.item_name} name="item_name" onChange={this.handleChange}/>
                    <label>Item Calories: </label>
                    <input type="text" value={this.state.item_calories} name="item_calories" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default DailyRecordInput