import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class SignOut extends Component {

    // componentDidMount() {
    //     this.props.logOut(user)
    // }

    render() {
        return (
            <Redirect to='/' />
        )
    }
}
