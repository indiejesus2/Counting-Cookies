import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import DailyRecordsContainer from '../../containers/DailyRecordsContainer';

class User extends Component {
    
    render() {

        const user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]

        return (
            <div key={user.id}>
                <h1>{user.name}</h1>
                 <p>{user.target} Daily Calorie Intake</p>
                 <DailyRecordsContainer user={user}/>
            </div>
        );
    }
};

export default User;
