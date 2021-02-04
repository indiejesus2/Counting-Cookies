export default function userReducer(state = {users: [], loading: false}, action) {
    switch(action.type) {
        case 'LOADING_USERS':
            debugger
            return {
                users: [...state.users],
                loading: true
            }
        case 'FETCH_USERS':
            debugger
            return {users: action.payload,
                loading: false
            }
        default:
            return state
    }
}