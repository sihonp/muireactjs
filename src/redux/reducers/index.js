import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import postReducer from './postReducer'

const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
    postReducer: postReducer

});

export default rootReducer;

