import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {

    render() {
        if (this.props.loggedIn === true) {
            return (
                <div className="nav">
                    <Nav>

                    <Nav.Item>
                        <Nav.Link href='/signout' onClick={this.props.signoutUser}>Sign-Out</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/users/${this.props.user.id}`}>Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/users'>Records</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/users/${this.props.user.id}/records/add_record`}>Add Record</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </div>
            )
        } else {
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
}

export default NavBar