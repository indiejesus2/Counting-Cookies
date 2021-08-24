import React, {useState} from 'react';

export default function EditUser(props) {

    const [name, setUsername] = useState(props.user.username)
    const [target, setTarget] = useState(props.user.target)

    const handleChange = (event) => {
        return(
            event.target.name==="name"?setUsername(event.target.value):
            event.target.name==="target"?setTarget(event.target.value):
            ()=>{}
            )
    }

    const handleSubmit = () => {

    }

    return(
        <div className="profile">
            <h3>Profile</h3>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
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