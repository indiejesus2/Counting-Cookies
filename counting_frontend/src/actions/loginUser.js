export const loginUser = (user) => {
    debugger
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }
        dispatch({type: 'FETCH_USER'})
        return fetch(`http://localhost:3000/sessions/`, configObj)
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'LOGIN_USER',
            payload: user
        }))
    }
}