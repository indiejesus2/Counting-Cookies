export default function usersReducer(state = {users: [], loading: false}, action) {
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
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}