import React from 'react';

import Logo from '~/components/Logo';
import NavigationItems from '~/components/Navigation/NavigationItems';
import Backdrop from '~/components/UI/Backdrop';
import Aux from '~/hoc/Aux';

import classes from './styles.css';

const sideDrawer = (props) => {
  // conditionally attach some css classes
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  const showClass = props.open ? classes.Open : classes.Close
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
