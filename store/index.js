import { createStore, combineReducers } from 'redux';
import userReducers from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// ツリー構造にしていく
const rootReducer = combineReducers({
  user: userReducers,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // 必要なデータのみ保存する(ツリー)（ホワイトリスト形式、ブラックリスト形式）
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
