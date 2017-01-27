import React from 'react';
import { Link } from 'react-router';

const Settings = (props) => {
  return (
    <div>
    Set Name: <input value={props.setName} type="text" onChange={(e) => props.grabName(e)}></input>
  <Link to="/home" onClick={props.spliceName}><button>SET</button></Link>
    <button onClick={props.resetName}>RESET</button>
  <div>
        Parental Controls:
    On: <input onClick={props.parentControlsOn} type="radio" value="On" name="parentalControlsToggle"/>
  Off: <input onClick={props.parentControlsOff} type="radio" value="Off" name="parentalControlsToggle"/>
  </div>
  </div>
  );
}

export default Settings;
