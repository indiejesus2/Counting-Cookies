import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users/Users'
import User from '../components/Users/User'
import UserInpt from '../components/Users/UserInput'

class UsersContainer extends Component {
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users} />}/>
                </Switch>
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