// export const addUser = (user) => {
//     return (dispatch) => {
//         const configObj = {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(user)
//         };
//         return fetch('http://localhost:3000/api/v1/users', configObj)
//         .then(response => response.json())
//         .then(user => dispatch({type: 'ADD_USER', payload: user}))
//     }
// }