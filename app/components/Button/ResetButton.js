import React from 'react';
import './settingsstyles';

const ResetButton = (props) => {
return(
  <button onClick={props.resetName} className="reset-button">RESET</button>
  )
}

export default ResetButton;
