export const deleteItem = (item) => {
    debugger
    return (dispatch) => {
        return (fetch(`http://localhost:3000/api/v1/users/${item.user_id}/records/${item.record_id}/days/${item.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(record => dispatch({type: 'ITEM_DELETE', payload: record}))
    }
}
