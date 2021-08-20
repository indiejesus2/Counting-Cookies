import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App';

// const rootReducer = combineReducers({
//   usersReducer,
//   recordsReducer,
//   loginReducer
//   //sessionReducer
// });

// const persistenceConfigs = {
//   key: "user_id",
//   storage
// }

// const persistedReducer = persistReducer(persistenceConfigs, rootReducer)

// let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
// const persistor = persistStore(store)

// const validateSession = (session) => {
//   return true
// }

// const options = { refreshOnCheckAuth: true, redirectPath: '/', driver: "COOKIES", validateSession };

// sessionService.initSessionService(store, options)

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);


