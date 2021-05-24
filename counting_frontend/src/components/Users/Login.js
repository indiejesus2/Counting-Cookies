import React, { Component } from 'react';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.props.history.push('/users')
        this.setState({
            username: '',
            password: ''
        })
        
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

export default Login