import * as Cookies from 'js-cookie'
import storage from "redux-persist/lib/storage"

export default function loginReducer(state = {user: [], loggedIn: false, loading: false, token: "", message: ""}, action) {
    switch(action.type) {
        case 'FETCH_USER':
            return {loading: true}
        case 'LOGIN_USER':
            Cookies.remove('eduResourceSession')
            Cookies.set('eduResourceSession', action.payload.jwt, {expires: 1})
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
            Cookies.remove('eduResourceSession')
            storage.removeItem('persist:key')
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