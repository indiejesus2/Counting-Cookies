
import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../../actions/loginUser'


// export default function SignIn(props) {
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

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // let history = useHistory();

    // const handleSubmit = (event) => {
    handleSubmit = (event) => {
        event.preventDefault()
        // const token = 
        // let state = {username: username, password: password}
        this.props.loginUser(this.state)
        // props.setSession(true)
        // this.props.setToken(token);
        this.props.history.push('/users')

        // setUsername('')
        // setPassword('')
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