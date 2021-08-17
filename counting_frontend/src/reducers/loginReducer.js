import { sessionService } from "redux-react-session"
import * as Cookies from 'js-cookie'

export default function loginReducer(state = {user: [], loggedIn: false, loading: false, token: "", message: ""}, action) {
    // debugger
    switch(action.type) {
        case 'FETCH_USER':
            return {loading: true}
        case 'LOGIN_USER':
            // localStorage.setItem('user', action.payload.data)
            Cookies.remove('eduResourceSession')
            Cookies.set('eduResourceSession', action.payload.jwt, {expires: 14})
            return {user: action.payload.user.data.attributes,
                loggedIn: true,
                loading: false,
                token: action.payload.jwt
            }
        case 'CURRENT_USER':
            if (action.payload.message) {
                return {
                    message: action.payload.message
                }
            } else {
                return {user: action.payload,
                loggedIn: true,
                loading: false
            }
        }
        case 'LOGOUT_USER':
            // localStorage.clear();
            Cookies.remove('eduResourceSession')
            debugger
            return {user: [],
                loggedIn: false,
                token: ""
            }
        case 'SIGNUP_USER':
            return {user: action.payload.user.data,
                loggedIn: true,
                loading: false,
                token: action.payload.jwt
            }
        default:
            return state
    }
}