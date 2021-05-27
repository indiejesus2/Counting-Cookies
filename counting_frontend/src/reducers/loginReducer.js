export default function loginReducer(state = {user: [], loggedIn: false, loading: false, id: 0}, action) {
    switch(action.type) {
        
        case 'FETCH_USER':
            return {loading: true}
        case 'LOGIN_USER':
            return {user: action.payload.data,
                loggedIn: true,
                loading: false
            }
        case 'LOGOUT_USER':
            return {user: [],
                loggedIn: false
            }
        default:
            return state
    }
}