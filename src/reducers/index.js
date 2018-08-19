import { combineReducers } from 'redux';
import userReducer from './user';
import goalsReducer from './goals';

const rootReducer = combineReducers({ userReducer, goalsReducer });

export default rootReducer;
