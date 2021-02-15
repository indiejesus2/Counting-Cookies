import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'
import {fetchRecords} from '../../actions/fetchRecords'

import User from './User'

class Users extends Component {

    render() {
        const users = this.props.users.map(user => user)

        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user => 
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`} onClick={() => this.props.fetchRecords(user)}>{user.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRecords: user => dispatch(fetchRecords(user))
})

export default connect(null, mapDispatchToProps)(Users)