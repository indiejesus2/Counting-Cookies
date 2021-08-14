import * as Cookies from 'js-cookie'

export function currentUser() {
    let token = Cookies.get("eduResourceSession")
    debugger
    return (dispatch) => {
        dispatch({type: 'FETCH_USER'})
        if (token) {
            const configObj = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: token
                },
                credentials: 'include'
            }
            fetch('http://localhost:3000/api/v1/current_user', configObj).then(resp => resp.json())
        .then(user => dispatch({
            type: 'LOGIN_USER',
            payload: user
        }))
        }
    }
}