import { combineReducers } from 'redux';
import GridReducer from './GridReducer';
import TimeReducer from './TimeReducer';
import HeatReducer from './HeatReducer';

export default combineReducers({
    GridReducer,
    TimeReducer,
    HeatReducer,
});
