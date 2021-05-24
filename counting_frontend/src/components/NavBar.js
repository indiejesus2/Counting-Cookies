import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {

    render() {
        debugger
        return (
            <div>
                <Nav>
                    <Nav.Item>
                    <Nav.Link href='/users'>Users</Nav.Link>
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