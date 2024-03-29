export function fetchUsers() {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'})
        fetch('https://counting-cookies-api.herokuapp.com/api/v1/users').then(resp => resp.json())
        .then(users => dispatch({
            type: 'FETCH_USERS',
            payload: users
        }))
    }
}