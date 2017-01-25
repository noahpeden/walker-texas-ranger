import React, {Component} from 'react';
import NewJokes from '../Button/New-Jokes';
import FavoritesBtn from '../Button/FavoritesButton';


const InputArea = (props) => {
  return (
    <div className="input-area">
      <NewJokes getNewJokes={props.getNewJokes} />
      <input placeholder="enter number of jokes"
        type='number'
        value={props.jokesNum}
        onChange={(e) => props.handleChange(e)}>
      </input>
      <FavoritesBtn />
    </div>
    )
  }

export default InputArea;
