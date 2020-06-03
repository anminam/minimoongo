import { combineReducers } from 'redux';
import { browserReducer } from './browser';
import { navReducer } from './nav';

export default combineReducers({
    browser: browserReducer,
    nav: navReducer
})