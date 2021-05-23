import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {addUser} from '../actions/addUser'
import {loginUser} from '../actions/loginUser'
import Spinner from 'react-bootstrap/Spinner'
import UserInput from '../components/Users/UserInput'
import Users from '../components/Users/Users'
import User from '../components/Users/User'
import Login from '../components/Users/Login'

class UsersContainer extends Component {
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        if (this.props.loading === false) {
            return (
                <div>
                    <Switch>
                        <Route direct path ='/users/new' render={(routerProps) => <UserInput {...routerProps} addUser={this.props.addUser} />} />
                        <Route direct path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users} records={this.props.records} />}/>
                        <Route direct path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users} />}/>
                        <Route direct path='/login' render={(routerProps) => <Login {...routerProps} loginUser={this.props.loginUser} />}/>
                        <Route direct path='/'><Redirect to="/login" /></Route>
                    </Switch>
                </div>
            )
        } else {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
        )}
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users.map(user => user.attributes),
        loading: state.usersReducer.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: user => dispatch(addUser(user)),
    loginUser: user => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)