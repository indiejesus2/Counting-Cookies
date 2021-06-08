// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../../actions/loginUser'


export default function SignIn(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
        // const token = 
        loginUser(username, password)
        // this.props.setToken(token);
        history.push('/users')
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