export const addRecord = (record) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_RECORDS'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(record)
        };
        
        return fetch(`http://counting-cookies-api.herokuapp.com/api/v1/users/${record.user_id}/records`, configObj)
        // return fetch(`http://localhost:3000/api/v1/users/${record.user_id}/records`, configObj)
        .then(resp => resp.json())
        .then(record => dispatch({type: 'ADD_RECORD', payload: record}))
    }
}