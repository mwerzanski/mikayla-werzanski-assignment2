import { combineReducers } from 'redux';
import GridReducer from './GridReducer';
import TimeReducer from './TimeReducer';

export default combineReducers({
    GridReducer,
    TimeReducer,
});
