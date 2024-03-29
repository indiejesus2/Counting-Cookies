import * as Cookies from 'js-cookie'

export function currentUser() {
    let token = Cookies.get("eduResourceSession")
    return (dispatch) => {
        if (token) {
            const configObj = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: token
                },
                credentials: 'include',
            }
            dispatch({type: 'FETCH_USER'})
            fetch('https://counting-cookies-api.herokuapp.com/api/v1/current_user', configObj).then(resp => resp.json())
        .then(user => dispatch({
            type: 'CURRENT_USER',
            payload: user
        }))
        .catch((error) => {
            debugger
        })
        }
    }
}