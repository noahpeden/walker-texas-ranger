import React from 'react';
import './settingsstyles';

const SetButton = (props) => {
return (
  <button className="set-button" onClick={(e)=> props.spliceName(e)}>SET</button>
  )
}

export default SetButton;
