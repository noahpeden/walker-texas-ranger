import React from 'react';
import './header-style';
import { Link } from 'react-router';


import SettingsButton from '../Button/SettingsButton';

const logStuff = () => {
  console.log("clicked!");
}



const Header = () => {
  return (
    <div className="Header">
      <Link to='/home'><h1 className="Header-Title">Chuck Norris Joke Machine</h1></Link>
      <Link to='/settings'><SettingsButton handleClick={() => logStuff()} /></Link>
    </div>
  );
}

export default Header;
