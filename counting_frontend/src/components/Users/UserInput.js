import React, { Component } from 'react'
import { withRouter } from 'react-router'

class UserInput extends Component {

    state = {
        username: '',
        password: '',
        name: '',
        target: 0,
        cookie: '',
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.props.history.push('/users')
        this.props.history.replace('/users')
    }
        // this.setState({
        //     username: '',
        //     password: '',
        //     name: '',
        //     target: 0
        // })

    render() {
        return (
            <div class="signup">
                <h1>Create A Free Account</h1>
                <p>Remember the cookies!</p>
                <div class="input">
                    <form class="signup-form" onSubmit={this.handleSubmit}>
                        <label>Username:</label>
                        <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange}/>
                        <br />
                        <label>Password:</label>
                        <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
                        <br />
                        <label>Name:</label>
                        <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                        <br />
                        <label>Daily Calories:</label>
                        <input type="number" value={this.state.target} name="target" onChange={this.handleChange}/>
                        <br />
                        <label>Favorite Cookie:</label>
                        <input type="text" value={this.state.cookie} name="cookie" placeholder="Chips Ahoy" onChange={this.handleChange}/>
                        <br />
                        <div class="submit">
                            <input type="submit" value="Sign-Up!"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(UserInput)