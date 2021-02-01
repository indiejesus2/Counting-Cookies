export default function userReducer(state = {users: []}, action) {
    switch(action.type) {
        case 'FETCH_USERS':
            return {accounts: action.payload}
        default:
            return state
    }
}