
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
    
    // const HandleUserChange = (event) => {
    //     useEffect(() => { setUsername(event.target.value) }, []);
    //     debugger
    // }
    
    // const HandlePasswordChange = (event) => {
    //     useEffect(() => { setPassword(event.target.value) }, []);
    // }
    // const handleSubmit = (event) => {

    // useEffect(() => { setUsername(username) }, [])
    // useEffect(() => { setPassword(password) }, [])
        
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.props.history.push('/users')
        // const token = 
        // let state = {username: username, password: password}
        // loginUser(state)
        // props.setSession(true)
        // this.props.setToken(token);
        // props.history.push('/users')

        // setUsername('')
        // setPassword('')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" onChange={this.handleChange}/>
                        {/* this.handleChange}/> */}
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={this.handleChange}/>
                        {/* this.handleChange}/> */}
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }


}