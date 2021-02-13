// export const deleteRecord = (record) => {
//     debugger
//     return (dispatch) => {
//         const configObj = {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json' 
//             },
//             body: JSON.stringify(record)
//         };
//         return (fetch(`http://localhost:3000/api/v1/users/${record.user_id}/records/${record.id}`, configObj))
//         .then(resp => resp.json())
//         .then(record => dispatch({type: 'DELETE_RECORD', payload: record}))
//     }
// }
export const deleteRecord = (record) => {
    debugger
    return (dispatch) => {
        return (fetch(`http://localhost:3000/api/v1/users/${record.user_id}/records/${record.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(record => dispatch({type: 'DELETE_RECORD', payload: record}))
    }
}
