import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Dashboard from './views/Dashboard';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/dashboard' component={Dashboard}/>
      <Redirect from='/' to='/dashboard'/>
    </Switch>
  </Router>
  , document.getElementById('root'));
serviceWorker.unregister();
