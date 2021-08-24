import React, { Component } from 'react'

class DailyRecordInput extends Component {

    state = {
        date: this.props.date,
        item_name: "",
        item_calories: "",
        user_id: this.props.user.id,
        id: 0,
        vote: 0
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.date !== this.props.date) {
            this.setState({
                date: this.props.date
            })
        }
    }
    
    checkRecord(date) {
        const record = this.props.records.filter(record => record.date === date)[0]
        if(record) {
            this.setState({
                id: record.id
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
        if(this.state.id === 0) {
            this.props.addRecord(this.state)
            this.clearState()
        } else {
            this.props.editRecord(this.state)
            this.clearState()
        }
    }

    render() {

        return (
            <div class="signin">
            <div class="input">
                <form onSubmit={this.handleSubmit} >
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date" 
                        value={this.state.date}
                        onChange={this.handleChange}/>
                        <br />
                    <label>Item Name: </label>
                    <input 
                    type="text"
                        value={this.state.item_name} 
                        name="item_name" 
                        onChange={this.handleChange}/>
                        <br />
                    <label>Item Calories: </label>
                    <input 
                        type="number"
                        value={this.state.item_calories} 
                        name="item_calories" 
                        onChange={this.handleChange}/>
                        <div class="submit">
                            <input type="submit" value="Add Item" />
                        </div>
                </form>
            </div>
            </div>
        )
    }
}

export default DailyRecordInput