import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class DailyRecordInput extends Component {

    state = {
        date: "",
        item_name: "",
        item_calories: "",
        user_id: this.props.user.id,
        id: 0,
        vote: 0
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
            <div>
                <br/>
                <Form onSubmit={this.handleSubmit} inline>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control 
                        type="date"
                        className="mb-2 mr-sm-2" 
                        id="inlineFormInputName2"
                        value={this.state.date} 
                        name="date" 
                        onChange={this.handleChange}/>
                    <Form.Label>Item Name:</Form.Label>
                    <Form.Control 
                        className="mb-2 mr-sm-2" 
                        id="inlineFormInputName2"
                        value={this.state.item_name} 
                        name="item_name" 
                        onChange={this.handleChange}/>
                    <Form.Label>Item Calories:</Form.Label>
                    <Form.Control 
                        className="mb-2 mr-sm-2" 
                        id="inlineFormInputName2"
                        value={this.state.item_calories} 
                        name="item_calories" 
                        onChange={this.handleChange}/>
                    <Form.Control type="submit" className="mb-2"/>
                </Form>
            </div>
        )
    }
}

export default DailyRecordInput