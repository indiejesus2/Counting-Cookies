import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import recordsReducer from './reducers/recordsReducer'
import loginReducer from './reducers/loginReducer'
import { sessionReducer, sessionService } from 'redux-react-session'
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App';

const rootReducer = combineReducers({
  usersReducer,
  recordsReducer,
  loginReducer,
  sessionReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

const validateSession = (session) => {
  return true
}

const options = { refreshOnCheckAuth: true, redirectPath: '/', driver: "COOKIES", validateSession };

sessionService.initSessionService(store, options)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


