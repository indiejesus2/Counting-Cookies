import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import DailyRecordsContainer from '../../containers/DailyRecordsContainer';

class User extends Component {
    
    render() {

        // const { user } = this.props;


        const user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]

        // const { user } = this.props.users.filter(user => user.id == this.props.match.params.id);

        return (
            <div key={user.id}>
                <h1>User!</h1>
//     <DailyRecordsContainer user={user}/>
<h1>{user.name}</h1>
{/* //     <p>{user.target} Daily Calorie Intake</p> */}
                
            </div>
            // <div>
            //     <h1>User</h1>
            // </div>
        );
    }
};


// const User = (props) => {



//     let user = props.users.filter(user => user.id == props.match.params.id)[0]


//     return (
//         <div>
//             <h2>
//                 {user.name} - {user.target}
//             </h2>
//         </div>
//     )
// }

export default User;
