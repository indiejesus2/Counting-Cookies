import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {addUser} from '../actions/addUser'
import {loginUser} from '../actions/loginUser'
import {fetchRecords} from '../actions/fetchRecords'
import {currentUser} from '../actions/currentUser'
import User from '../components/Users/User'
import EditUser from '../components/Users/EditUser'



class UsersContainer extends Component {
    


    
    render() {
            return (
                <div>
                    <div class="user">
                        <Switch>
                            <Route exact path='/users/:id' render={(routerProps) => <EditUser {...routerProps} user={this.props.user} />}/>
                            <Route direct path='/signin'><Redirect to="/users" /></Route>
                            <Route exact path='/users' render={(routerProps) => <User {...routerProps} user={this.props.user} />}/>
                        </Switch>
                    </div>
                </div>
            )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    currentUser: () => dispatch(currentUser()),
    fetchRecords: user => dispatch(fetchRecords(user)),
    addUser: user => dispatch(addUser(user)),
    loginUser: user => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(UsersContainer)