export function loginUser() {
    return (dispatch) => {
        dispatch({type: 'LOGIN_USER'})
        fetch('http://locathost:3000/api/v1/users').then(resp => resp.json())
        .then(user => dispatch({
            type: 'LOGIN_USER',
            payload: user
        }))
    }
}