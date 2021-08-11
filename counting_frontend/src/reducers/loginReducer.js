import { sessionService } from "redux-react-session"

export default function loginReducer(state = {user: [], loggedIn: false, loading: false, id: 0}, action) {
    switch(action.type) {
        case 'FETCH_USER':
            return {loading: true}
        case 'LOGIN_USER':
            debugger
            // localStorage.setItem('user', action.payload.data)
            return {user: action.payload.data,
                loggedIn: true,
                loading: false
            }
        case 'LOGOUT_USER':
            // localStorage.clear();
            return {user: [],
                loggedIn: false
            }
        case 'SIGNUP_USER':
            return {user: action.payload.data,
                loggedIn: true,
                loading: false
            }
        default:
            return state
    }
}