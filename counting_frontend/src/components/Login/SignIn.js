
// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../../actions/loginUser'


export default function SignIn(props) {

    debugger
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
        // const token = 
        let state = {username: username, password: password}
        loginUser(state)
        props.setSession(true)
        // this.props.setToken(token);
        history.replace('/users')
        setUsername('')
        setPassword('')
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)}/>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
