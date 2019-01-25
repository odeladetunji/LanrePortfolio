import {combineReducers} from 'redux';
import toggleNav from './toggleNav';
import scroll from './scroll';

const allReducers = combineReducers({
    toggleNav: toggleNav,
    scroll: scroll
});

export default allReducers;
