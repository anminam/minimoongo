import { combineReducers } from 'redux';
import { browserReducer } from './browser';
import { navReducer } from './nav';
import { goodsReducer } from './goods';
import { categoryReducer } from './category';

export default combineReducers({
    browser: browserReducer,
    nav: navReducer,
    goods: goodsReducer,
    category: categoryReducer,
})