import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import User from '../components/User'
import UserInpt from '../components/UserInput'

class UsersContainer extends Component {
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                <Users users={this.props.users} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)