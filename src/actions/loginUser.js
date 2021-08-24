export const loginUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
            },
            body: JSON.stringify(user)
        }
        dispatch({type: 'FETCH_USER'})
        return fetch(`https://counting-cookies-api.herokuapp.com/api/v1/login`, configObj)
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'LOGIN_USER',
            payload: user
        }))
    }
}