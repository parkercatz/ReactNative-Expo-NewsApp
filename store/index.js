import { createStore, combineReducers } from 'redux';
import userReducers from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

// ツリー構造にしていく
const rootReducer = combineReducers({
  user: userReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
