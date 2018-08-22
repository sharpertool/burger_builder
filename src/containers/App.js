import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Header from '../components/Header';

console.log(`css stuff: ${JSON.stringify(classes)}`);

class App extends Component {
  
  constructor(props) {
    super(props)
    
    console.log('[App.js] Inside Constructor', props)
    
    this.state = {
      persons: [
        {id: 'xx', name: 'Max', age: 28},
        {id: 'xxy', name: 'Manu', age: 29},
        {id: 'xxz', name: 'Stephanie', age: 26},
      ],
      showPersons: true
    }
  }
  
  componentWillMount() {
    console.log('Yeah, it will mount')
  }
  
  componentDidMount() {
    console.log('It was successfully mounted. I could do some side-effects here if I want.')
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
    this.setState({showPersons: !this.state.showPersons});
  };
  
  render() {
    console.log('rendering....')
    return (
      <div className={classes.App}>
        <Header
          logo={logo}
          message={this.props.title}
          classes={classes}
        />
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
      </div>
    );
  }
}

export default App;
