import React from 'react';
import { Link } from 'react-router';


const SettingsButton = (props) => {
  return (
    <div>
    <button className='settings' onClick={() => props.handleClick() }>SETTINGS</button>
  </div>
  );
}

export default SettingsButton;
