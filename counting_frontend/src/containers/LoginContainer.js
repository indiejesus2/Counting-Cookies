import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {signoutUser} from '../actions/signoutUser'
import {addUser} from '../actions/addUser'
import Spinner from 'react-bootstrap/Spinner'
import SignIn from '../components/Login/SignIn'
import SignOut from '../components/Login/SignOut'
import UserInput from '../components/Users/UserInput'
import UsersContainer from './UsersContainer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import loginReducer from '../reducers/loginReducer'

export default function LoginContainer() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [state, dispatch] = useReducer(loginReducer, user);

        debugger
        if (loading === true) {
            return (
                <div>
                    <Jumbotron>
                    <h1>Counting Cookies</h1>
                    <NavBar loggedIn={loggedIn}/>
                  </Jumbotron>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                </div>
            )
        } else {
            if (loggedIn === true) {

                return (
                    <div>
                    <Jumbotron>
                        <h1>Counting Cookies</h1>
                        <NavBar loggedIn={loggedIn}/>
                        </Jumbotron>
                        <UsersContainer user={user}/>
                    </div>
                )
            } else {
                return (

                    <div>
                    <Jumbotron>
                    <h1>Counting Cookies</h1>
                    <NavBar loggedIn={loggedIn}/>
                  </Jumbotron>
                        <Switch>
                        {/* <Route direct path ='/users/new' render={(routerProps) => <UserInput {...routerProps} addUser={this.props.addUser} />} /> */}
                            <Route direct path='/signin' render={(routerProps) => <SignIn {...routerProps} />}/>
                            {/* <Route direct path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutUser} /> }/> */}
                            <Route direct path='/'><Redirect to="/signin" /></Route>
                        </Switch>
                    </div>
            )}
        }
}

//     const mapStateToProps = state => {
//         return {
//             user: state.loginReducer.user,
//             loggedIn: state.loginReducer.loggedIn,
//             loading: state.loginReducer.loading,
//             // setToken: state.setToken
//         }
//     }

//     const mapDispatchToProps = dispatch => ({
//         loginUser: user => dispatch(loginUser(user)),
//         addUser: user => dispatch(addUser(user)),
//         signoutUser: user => dispatch(signoutUser(user))
//     })

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)