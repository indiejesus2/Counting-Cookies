import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import User from './User'

class Users extends Component {
    render() {
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {this.props.users.map(user => <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Users