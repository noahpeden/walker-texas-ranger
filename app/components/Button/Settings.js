import React from 'react';
import { Link } from 'react-router';
import './settingsstyles';
import ResetButton from './ResetButton';
import SetButton from './SetButton';

const Settings = (props) => {
  return (
    <div className='button-input'>
      <div className='settings-area'>Set Name: <input  className="settings-input" value={props.setName} type="text" onChange={(e) => props.grabName(e)}></input>
      <SetButton />
      <ResetButton />
        <div>
          NSFW MODE:
          On: <input className='settings-button' onClick={props.parentControlsOn} type="radio" value="On" name="parentalControlsToggle"/>
          Off: <input className='settings-button' onClick={props.parentControlsOff} type="radio" value="Off" name="parentalControlsToggle"/>
        </div>
    </div>
  </div>
  );
}

export default Settings;
