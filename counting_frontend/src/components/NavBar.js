import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {

    render() {
        if (this.props.loggedIn == true) {
            return (
                <div>
                    <Nav.Item>
                    <Nav.Link href='/logout'>Sign-Out</Nav.Link>
                    </Nav.Item>
                </div>
            )
        }
        return (
            <div class="nav">
                <Nav>
                    <Nav.Item>
                    <Nav.Link href='/login'>Sign-In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href='/users/new'>New User</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default NavBar