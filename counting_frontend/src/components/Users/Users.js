import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        return(
            <ul>
                {this.props.users.map(user => <li key={user.id}>
                    {user.name} - {user.target}
                </li>)}
            </ul>
        )
    }
}

export default Users