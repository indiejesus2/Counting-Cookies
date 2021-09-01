import React, { Component } from 'react';
import DailyRecordsContainer from '../../containers/DailyRecordsContainer';


class User extends Component {
    render() {
        const user = this.props.user
        return (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.target} Daily Calorie Intake</p>
                    <div class="records">
                        <DailyRecordsContainer class="records" user={this.props.user}/>
                    </div>
                </div>
        );
    }
};

export default User
