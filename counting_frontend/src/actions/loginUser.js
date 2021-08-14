import {LOGIN_ACTION_KEY} from '../constant'
import { sessionService } from 'redux-react-session'

export const loginUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }
        dispatch({type: 'FETCH_USER'})
        return fetch(`http://localhost:3000/api/v1/login`, configObj)
        .then(resp => resp.json())
            // const { token } = resp;
        //     sessionService.saveSession({resp})
        //     .then(() => {
        //         sessionService.saveUser(resp)
        //     });
        // })
        .then(user => dispatch({
            type: 'LOGIN_USER',
            payload: user
        }))
    }
}