import React from 'react';

import './StyleSwitch.css';

const StyleSwitch = (props) => (
    <div className={ props.icon ? "bulb off" : "bulb" } style={{ boxShadow: "0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)"}}>
      <svg width="32px" height="30px" viewBox="0 0 32 30">
        <path d="M11.8037382,22 C10.7546727,20.5 9.59626432,18.5830845 9.1810745,17 C8.13200903,13 11.8037382,9 16,9 C20.1962618,9 23.867991,13 22.8189255,17 C22.147873,19.5586678 20.6802136,21.077366 20.1962618,22"></path>
        <path d="M13,25 L19,25 L19,26 C19,27.6568542 17.6568542,29 16,29 L16,29 C14.3431458,29 13,27.6568542 13,26 L13,25 Z"></path>
        <path className="light" d="M4,15 L1,15"></path>
        <path className="light" d="M8,7.5 L5.5,5"></path>
        <path className="light" d="M16,4 L16,1"></path>
        <path className="light" d="M24,7.5 L26.5,5"></path>
        <path className="light" d="M28,15 L31,15"></path>
      </svg>
    </div>
  );

export default StyleSwitch;
