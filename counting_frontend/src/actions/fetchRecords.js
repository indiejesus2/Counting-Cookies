export const fetchRecords = (user) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_RECORDS'})
        fetch(`http://localhost:3000/api/v1/users/${user.id}/records`).then(resp => resp.json())
        .then(records => dispatch({
            type: 'FETCH_RECORDS',
            payload: records
        }))
    }
}