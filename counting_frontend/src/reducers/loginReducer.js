export default function loginReducer(state = {user: [], loggedIn: false, id: 0}, action) {
    switch(action.type) {
        
        case 'LOGIN_USER':
            return {user: action.payload.data,
                loggedIn: true
            }
        case 'LOGOUT_USER':
            return {user: [],
                loggedIn: false
            }
        default:
            return state
    }
}