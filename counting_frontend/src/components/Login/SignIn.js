
// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../../actions/loginUser'


export default function SignIn(props) {
// export default class SignIn extends Component {

    // state = {
    //     username: '',
    //     password: '',
    // }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (event) => {
        return(
        event.target.name==="username"?setUsername(event.target.value):
        event.target.name==="password"?setPassword(event.target.value):
        ()=>{}
        )
    }

    

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
        
    const handleSubmit = (event) => {
        event.preventDefault()
        let state = {username: username, password: password}
        props.loginUser(state)
        // this.props.history.push('/users')
        // const token = 
        // let state = {username: username, password: password}
        // loginUser(state)
        // props.setSession(true)
        // this.props.setToken(token);
        // props.history.push('/users')

        // setUsername('')
        // setPassword('')
    }

    // render() {
        return (
            <div class="signin">
                <h1>Sign-In</h1>
                <p>How many cookies can we eat today?</p>
            <div class="input">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                    <br />
                        {/* this.handleChange}/> */}
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                        {/* this.handleChange}/> */}
                        <div class="submit">
                            <input type="submit" value="Log-In"/>
                        </div>
                </form>
            </div>
            </div>
        )
    // }


}