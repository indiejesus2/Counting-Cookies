import React, {useState} from 'react';

export default function EditUser(props) {

    const [username, setUsername] = useState(props.username)
    const [target, setTarget] = useState(props.target)

    const handleChange = (event) => {
        return(
            event.target.name==="username"?setUsername(event.target.value):
            event.target.name==="target"?setTarget(event.target.value):
            ()=>{}
            )
    }

    const handleSubmit = () => {

    }

    debugger
    return(
        <div className="profile">
            <h3>Profile</h3>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={handleChange}/>
                    <label>Daily Target: </label>
                    <input type="number" name="target" id="target" value={target} onChange={handleChange}/>
                    <div className="submit">
                        <input type="submit" value="Edit Profile" />
                    </div>
                </form>
            </div>
        </div>
    )
}