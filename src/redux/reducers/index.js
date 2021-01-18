import launchReducer from './launchReducer';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const launchPersistConfig = {
  storage: AsyncStorage,
  key: 'saved',
};

export const reducers = {
  saved: persistReducer(launchPersistConfig, launchReducer),
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
