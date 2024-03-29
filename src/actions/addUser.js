export const addUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        };
        dispatch({type: 'FETCH_USER'})
        return fetch('https://counting-cookies-api.herokuapp.com/api/v1/users', configObj)
        .then(response => response.json())
        .then(user => dispatch({type: 'SIGNUP_USER', payload: user}))
    }
}