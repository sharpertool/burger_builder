import React, {PureComponent} from 'react';
import classes from './App.css';
import withClass from '../hoc/withClass';

import Layout from '../components/Layout/Layout'
import BurgerBuilder from '../containers/BurgerBuilder'

class App extends PureComponent {
  
  constructor(props) {
    super(props);
    
  }
  

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    )
    
    return prevState
  }
  
  getSnapshotBeforeUpdate() {
    console.log(
      "[UPDATE App.js] Inside getSnapshotBeforeUpdate"
    )
    
    return null
  }
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default withClass(App, classes.App);
