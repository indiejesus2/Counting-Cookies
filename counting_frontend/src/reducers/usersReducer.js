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
        case 'LOGIN_USER':
            return {users: action.payload.data,
                loading: false
            }
        default:
            return state
    }
}