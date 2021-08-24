export const fetchRecords = (user) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_RECORDS'})
        fetch(`https://counting-cookies-api.herokuapp.com/api/v1/users/${user.id}/records`).then(resp => resp.json())
        .then(records => dispatch({
            type: 'FETCH_RECORDS',
            payload: records
        }))
    }
}