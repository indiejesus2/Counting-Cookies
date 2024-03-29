import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {signoutUser} from '../actions/signoutUser'
import {addUser} from '../actions/addUser'
import Spinner from 'react-bootstrap/Spinner'
import SignIn from '../components/Login/SignIn'
import SignOut from '../components/Login/SignOut'
import UserInput from '../components/Users/UserInput'
import { loginUser } from '../actions/loginUser'
import { currentUser } from '../actions/currentUser'
import UsersContainer from './UsersContainer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

class LoginContainer extends Component {

    componentDidMount() {
        this.props.currentUser()
        // window.addEventListener('beforeunload', this.handleWindowClose);
    }

    handleWindowClose() {
        this.props.signoutUser()
    }

    // const [user, setUser] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);
    // const [state, dispatch] = useReducer(loginReducer, user);
    render() {
        if (this.props.loading === true) {
            return (
<div>
<div className="header">
                        <h1>Counting Cookies</h1>
                        </div>
                    <Jumbotron className="jumbotron">
                    <div className="header">
                        <NavBar className="navbar" loggedIn={this.props.loggedIn} user={this.props.user} />
                        </div>
                  </Jumbotron>
                  <div className="spinner">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                </div>
            )
        } else {
            if (this.props.loggedIn === true) {

                return (

                    <div>
                                            <div className="header">
                        <h1>Counting Cookies</h1>
                        </div>
                    <Jumbotron className="jumbotron">

                        <NavBar className="navbar" loggedIn={this.props.loggedIn} user={this.props.user} signoutUser={this.props.signoutUser}/>
                  </Jumbotron>
                        <UsersContainer user={this.props.user}/>
                    </div>
                )
            }
             else {
                return (
<div>
<div className="header">
                        <h1>Counting Cookies</h1>
                        </div>

                    <Jumbotron className="jumbotron">

                        <NavBar className="navbar" loggedIn={this.props.loggedIn} user={this.props.user} signoutUser={this.props.signoutUser}/>
                  </Jumbotron>
                        <Switch>
                        <Route exact path ='/users/new' render={(routerProps) => <UserInput {...routerProps} addUser={this.props.addUser} />} />
                            <Route exact path='/signin' render={(routerProps) => <SignIn {...routerProps} loginUser={this.props.loginUser} setSession={this.props.setSession}/>}/>
                            <Route exact path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutUser} user={this.props.user}/> }/>
                            <Route exact path='/'><Redirect to="/signin" /></Route>
                        </Switch>
                    </div>
            )}
        }
    }
}

    const mapStateToProps = state => {
        return {
            user: state.loginReducer.user,
            loggedIn: state.loginReducer.loggedIn,
            loading: state.loginReducer.loading,
            setSession: state.setSession
        }
    }

    const mapDispatchToProps = dispatch => ({
        loginUser: user => dispatch(loginUser(user)),
        addUser: user => dispatch(addUser(user)),
        signoutUser: () => dispatch(signoutUser()),
        currentUser: () => dispatch(currentUser())
    })

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)