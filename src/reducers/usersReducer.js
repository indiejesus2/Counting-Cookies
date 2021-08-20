export default function usersReducer(state = {users: [], loading: false, id: 0}, action) {
    switch(action.type) {
        
        case 'LOADING_USERS':
            return {
                users: [...state.users],
                loading: true
            }
        case 'FETCH_USERS':
            return {users: action.payload.data,
                loading: false
            }
        default:
            return state
    }
}