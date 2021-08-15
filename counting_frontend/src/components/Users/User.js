import React, { Component } from 'react';

class User extends Component {
    render() {
        const user = this.props.user
        return (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.target} Daily Calorie Intake</p>

                </div>
        );
    }
};

export default User
