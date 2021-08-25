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
import DailyRecordsContainer from '../containers/DailyRecordsContainer';



class UsersContainer extends Component {
    


    
    render() {
            return (
                <div>
                    <div class="user">
                        <Switch>
                            <Route direct path='/users' render={(routerProps) => <User {...routerProps} user={this.props.user} />}/>
                            {/* <Route direct path='/users/:id' render={(routerProps) => <EditUser {...routerProps} user={this.props.user} />}/> */}
                            <Route direct path='/signin'><Redirect to="/users" /></Route>
                        </Switch>
                    </div>

                    <div class="records">
                     <DailyRecordsContainer class="records" user={this.props.user}/>
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