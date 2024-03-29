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
        
        return fetch(`https://counting-cookies-api.herokuapp.com/api/v1/users/${record.user_id}/records`, configObj)
        .then(resp => resp.json())
        .then(record => dispatch({type: 'ADD_RECORD', payload: record}))
    }
}