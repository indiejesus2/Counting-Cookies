import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import recordsReducer from './reducers/recordsReducer'
import {combineReducers } from 'redux';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  usersReducer,
  recordsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


