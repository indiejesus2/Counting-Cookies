import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User'

class Users extends Component {
    
    
    render() {
        debugger
        const users = this.props.users.map(user => user)
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user => 
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`} >{user.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Users