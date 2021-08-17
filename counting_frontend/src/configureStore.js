import {createStore, applyMiddleware} from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import recordsReducer from './reducers/recordsReducer'
import loginReducer from './reducers/loginReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    usersReducer,
    recordsReducer,
    loginReducer
    //sessionReducer
  });
  
  const persistenceConfigs = {
    key: "loggedIn",
    storage
  }
  
  const persistedReducer = persistReducer(persistenceConfigs, rootReducer)
  const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
  const persistor = persistStore(store)
  export { persistor, store }