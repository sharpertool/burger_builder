import React from 'react';

import classes from './layout.css';

import Aux from '~/hoc/Aux';
import ToolBar from '~/components/Navigation/Toolbar/index';
import SideDrawer from '~/components/SideDrawer/index';

class layout extends React.Component {
  
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false})
  }
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  
  render() {
    return (
      <Aux>
        <ToolBar toggleSidebar={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    
    );
  }
}

export default layout;
