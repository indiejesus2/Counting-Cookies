export const deleteItem = (item, user) => {
    return (dispatch) => {
        return (fetch(`https://counting-cookies-api.herokuapp.com/api/v1/users/${user}/records/${item.record_id}/days/${item.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(record => dispatch({type: 'DELETE_ITEM', payload: record}))
    }
}
