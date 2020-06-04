import { combineReducers } from 'redux';
import { browserReducer } from './browser';
import { navReducer } from './nav';
import { goodsReducer } from './goods';

export default combineReducers({
    browser: browserReducer,
    nav: navReducer,
    goods: goodsReducer,
})