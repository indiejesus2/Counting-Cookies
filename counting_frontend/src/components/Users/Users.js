import React  from 'react'
import {Link} from 'react-router-dom'

const Users = props => {

        debugger 
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {props.users.map(user => 
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
}

export default Users