import {combineReducers} from 'redux';
import userReducer from './user';
import artemplateReducer from './artemplate';

const rootReducer = combineReducers({userReducer, artemplateReducer});

export default rootReducer