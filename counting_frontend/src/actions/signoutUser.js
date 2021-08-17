// export const signoutUser = (user) => {
//     // debugger
//     return (dispatch) => {
//         const configObj = {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//         }
//         return fetch(`http://localhost:3000/api/v1/sign_out`, configObj)
//         .then(resp => resp.json())
//         .then(user => dispatch({
//             type: 'SIGNOUT_USER',
//             payload: user
//         }))
//     }
// }

export const signoutUser = () => {
    debugger
    return { type: 'LOGOUT_USER'}
}