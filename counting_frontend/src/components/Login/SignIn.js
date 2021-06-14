// import React, { Component } from 'react';
import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../../actions/loginUser'


export default class SignIn extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        debugger
        // const token = 
        this.props.loginUser(this.state)
        // this.props.setToken(token);
        this.props.history.push('/users')
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
