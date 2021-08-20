export const addVote = (record) => {
    return (dispatch) => {
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(record)
        };
        return fetch(`http://counting-cookies-api.herokuapp.com/api/v1/users/${record.user_id}/records/${record.id}`, configObj)
        .then(resp => resp.json())
        .then(record => dispatch({type: 'EDIT_RECORD', payload: record}))
    }
}