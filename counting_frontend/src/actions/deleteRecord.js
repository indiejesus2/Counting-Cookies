export const deleteRecord = (record) => {
    return (dispatch) => {
        return (fetch(`http://localhost:3000/api/v1/users/${record.user_id}/records/${record.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(record => dispatch({type: 'DELETE_RECORD', payload: record}))
    }
}
