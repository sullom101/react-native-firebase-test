import launchReducer from './launchReducer';
import missionReducer from './missionReducer';
import launchStatusReducer from './launchStatusReducer';
import userReducer from './userReducer';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const launchPersistConfig = {
  storage: AsyncStorage,
  key: 'launch',
};

const missionPersistConfig = {
  storage: AsyncStorage,
  key: 'mission',
};

const userPersistConfig = {
  storage: AsyncStorage,
  key: 'user',
};

const launchStatusPersistConfig = {
  storage: AsyncStorage,
  key: 'launchStatus',
};

export const reducers = {
  launch: persistReducer(launchPersistConfig, launchReducer),
  mission: persistReducer(missionPersistConfig, missionReducer),
  launchStatus: persistReducer(launchStatusPersistConfig, launchStatusReducer),
  user: persistReducer(userPersistConfig, userReducer),
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
