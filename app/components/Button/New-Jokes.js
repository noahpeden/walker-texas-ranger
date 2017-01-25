import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
const handleJokes = () => {
  console.log('this handles jokes');
}

const NewJokes = (props) => {
  return (
    <button className="new-jokes"><Link
      className="new-jokes" to='/jokes' onClick={() => props.getNewJokes() }>Get Jokes</Link></button>
  );
}

export default NewJokes;
