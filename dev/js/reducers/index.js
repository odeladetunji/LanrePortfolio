import {combineReducers} from 'redux';
import toggleNav from './toggleNav';

const allReducers = combineReducers({
    toggleNav: toggleNav,
});

export default allReducers;
