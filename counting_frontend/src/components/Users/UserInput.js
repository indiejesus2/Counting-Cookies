import React, { Component } from 'react'

class UserInput extends Component {

    state = {
        name: '',
        target: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({
            name: '',
            target: 0
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Daily Calories: </label>
                    <input type="number" value={this.state.target} name="target" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default UserInput