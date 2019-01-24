import "@babel/polyfill";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './components';
// import allReducers from './reducers';
import store from './store';
require('../styles/index.css');

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById('root')
);
