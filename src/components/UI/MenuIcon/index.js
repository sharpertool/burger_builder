import React from 'react';

import classes from './styles.css'

const menuIcon = (props) => {
  return (
    <div className={classes.MenuIcon} onClick={props.clicked}>
      <div/>
      <div/>
      <div/>
    </div>
    
  );
};

export default menuIcon;
