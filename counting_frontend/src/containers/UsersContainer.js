import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {addUser} from '../actions/addUser'
import UserInput from '../components/Users/UserInput'
import Users from '../components/Users/Users'
import User from '../components/Users/User'

class UsersContainer extends Component {
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {

        return (
            <div>
                <Switch>
                    <Route direct path ='/users/new' render={(routerProps) => <UserInput {...routerProps} addUser={this.props.addUser} />} />
                    <Route direct path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} records={this.props.records} />}/>
                    <Route direct path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users} />}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users.map(user => user.attributes),
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)