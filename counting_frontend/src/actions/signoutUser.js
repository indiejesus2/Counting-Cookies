export const signoutUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }
        return fetch(`http://localhost:3000/sessions/${user.id}`, configObj)
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'SIGNOUT_USER',
            payload: user
        }))
    }
}