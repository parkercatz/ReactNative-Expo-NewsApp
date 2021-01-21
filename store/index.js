import { createStore, combineReducers } from 'redux';
import userReducers from './reducers/user';

// ツリー構造にしていく
const rootReducer = combineReducers({
  user: userReducers,
});

const store = createStore(rootReducer);

export default store;
