import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {loginUser} from '../actions/loginUser'
import {addUser} from '../actions/addUser'
import Spinner from 'react-bootstrap/Spinner'
import Login from '../components/Users/Login'
import UserInput from '../components/Users/UserInput'
import UsersContainer from './UsersContainer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'


class LoginContainer extends Component {

    render() {
        if (this.props.loggedIn === true) {
            return (
                <div>
                <Jumbotron>
                    <h1>Counting Cookies</h1>
                    <NavBar loggedIn={this.props.loggedIn}/>
                    </Jumbotron>
                    <UsersContainer user={this.props.user}/>
                </div>
            )
        } else {
            return (
                <div>
                <Jumbotron>
                <h1>Counting Cookies</h1>
                <NavBar loggedIn={this.props.loggedIn}/>
              </Jumbotron>
                    <Switch>
                    <Route direct path ='/users/new' render={(routerProps) => <UserInput {...routerProps} addUser={this.props.addUser} />} />
                        <Route direct path='/login' render={(routerProps) => <Login {...routerProps} loginUser={this.props.loginUser} />}/>
                        <Route direct path='/'><Redirect to="/login" /></Route>
                    </Switch>
                </div>
                // <Spinner animation="border" role="status">
                //     <span className="sr-only">Loading...</span>
                // </Spinner>
        )}
    }
}

    const mapStateToProps = state => {
        return {
            user: state.loginReducer.user,
            loggedIn: state.loginReducer.loggedIn
        }
    }

    const mapDispatchToProps = dispatch => ({
        loginUser: user => dispatch(loginUser(user))
    })

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)