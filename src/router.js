/**
 * Created by moyu on 2017/2/26.
 */
import React from 'react';
import {Router, browserHistory, Route, Redirect, IndexRoute} from "react-router";
import App from './App'
import MainPage from 'pages/MainPage';
import CommentsPage from 'pages/CommentsPage';

export default (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="comments" component={CommentsPage} />
        </Route>
    </Router>
)