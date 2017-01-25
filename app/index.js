import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from './components/home';
import Button  from './components/Button/Button';
import NewJokes from './components/Button/New-Jokes';
import  FavoritesButton  from './components/Button/FavoritesButton';
import { PageNotFound } from './components/pageNotFound';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} >
      <Route path='/jokes' component={NewJokes}/>
    </Route>
  </Router>
, document.getElementById('application'));
