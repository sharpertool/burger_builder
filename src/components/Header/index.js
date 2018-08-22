import React from 'react';

const Header = (props) => {
  return (
    <header className={props.classes.App_header}>
      <img src={props.logo} className={props.classes.App_logo} alt="logo"/>
      <h1 className={props.classes.App_title}>{props.message}</h1>
    </header>
  
  )
}

export default Header
