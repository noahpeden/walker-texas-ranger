import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
const handleJokes = () => {
  console.log('this handles jokes');
}

const NewJokes = (props) => {
  return (
    <Link to='/jokes' className='new-jokes' onClick={() => props.getNewJokes() }>New Jokes</Link>
  );
}

export default NewJokes;
