import React, { Component } from 'react'
import {connect} from 'react-redux'

class DailyRecordInput extends Component {

    state = {
        date: "",
        item_name: "",
        item_calories: "",
        user_id: this.props.user.id
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRecord(this.state)
        this.setState({
            date: "",
            item_name: "",
            item_calories: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date: </label>
                    <input type="date" value={this.state.date} name="date" onChange={this.handleChange}/>
                    <label>Item Name: </label>
                    <input type="text" value={this.state.target} name="item_name" onChange={this.handleChange}/>
                    <label>Item Calories: </label>
                    <input type="text" value={this.state.target} name="item_calories" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default DailyRecordInput