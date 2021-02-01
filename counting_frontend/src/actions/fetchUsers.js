export function fetchUsers() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/accounts')
        .then(resp => resp.json())
        .then(users => dispatch({
            type: 'FETCH_USERS',
            payload: users
        }))
    }
}