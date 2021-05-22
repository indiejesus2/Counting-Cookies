import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import recordsReducer from './reducers/recordsReducer'
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'
import App from './App';

const rootReducer = combineReducers({
  usersReducer,
  recordsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Jumbotron>
        <h1>Counting Cookies</h1>
        <Nav>
        <Nav.Item>
          <Nav.Link href='/users'>Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/users/new'>New User</Nav.Link>
        </Nav.Item>
      </Nav>
      </Jumbotron>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


