// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

import style from '../style/master.scss';
import favicon from './favicon.png';

import App from '../components/App.js';

// Router
import {
    Router,
    Route,
    browserHistory,
    IndexRoute,
} from 'react-router';

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
), document.getElementById('app'));
