import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './views/Home';
import AppRoute from 'router';
import MainLayout from 'layouts/MainLayout';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <AppRoute exact path="/home" component={Home} layout={MainLayout} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
serviceWorker.unregister();
