import React, {PureComponent} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Header from '../components/Header';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

console.log(`css stuff: ${JSON.stringify(classes)}`);

class App extends PureComponent {
  
  constructor(props) {
    super(props);
    
    console.log('[App.js] Inside Constructor', props);
    
    this.state = {
      persons: [
        {id: 'xx', name: 'Max', age: 28},
        {id: 'xxy', name: 'Manu', age: 29},
        {id: 'xxz', name: 'Stephanie', age: 26},
      ],
      showPersons: false,
      toggleClicked: 0,
    };
  }
  
  componentWillMount() {
    console.log('[App.js] Inside Will Mount]');
  }
  
  componentDidMount() {
    console.log('[App.js] Inside Did Mount]');
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons
  //   || nextState.showPersons !== this.state.showPersons
  // }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  
  nameChangedHandler = (event, id) => {
    const idx = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[idx].name = event.target.value;
    this.setState({persons: persons});
  };
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
  
  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      const doesShow = prevState.showPersons
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        };
      }
    );
  };
  
  render() {
    console.log('[App.js] Inside render');
    return (
      <Aux>
        <Header
          logo={logo}
          message={this.props.title}
          classes={classes}
        />
        <button
          onClick={() => {
            this.setState({showPersons: true});
          }}>
          Show Persons
        </button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          click={this.togglePersonsHandler}
        />
        {this.state.showPersons ? <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        /> : null}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
