import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User'

class Users extends Component {
    render() {
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {this.props.users.map(user =>
                        <li key={user.id}>
                            
                            {/* <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} user={user}/>}/> */}

                            <Link to={`/users/${user.id}`} >{user.name}</Link>
                            {/* <User key={user.id} user={user} /> */}
                            {/* {user.name} */}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Users