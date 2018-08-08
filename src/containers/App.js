import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

console.log(`css stuff: ${JSON.stringify(classes)}`)
class App extends Component {
  state = {
    persons: [
      {id: 'xx', name: 'Max', age: 28},
      {id: 'xxy', name: 'Manu', age: 29},
      {id: 'xxz', name: 'Stephanie', age: 26},
    ],
    showPersons: true
  };
  
  switchNameHandler = (event) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26},
      ]
    });
  };
  
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
    return (
        <div className={classes.App}>
          <header className={classes.App_header}>
            <img src={logo} className={classes.App_logo} alt="logo"/>
            <h1 className={classes.App_title}>Welcome to React6</h1>
          </header>
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
