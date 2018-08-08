import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

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
    console.log(`Changing name on ${id} to ${event.target.value}`);
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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      btnClass = classes.Red;
    }
    
    return (
        <div className={classes.App}>
          <header className={classes.App_header}>
            <img src={logo} className={classes.App_logo} alt="logo"/>
            <h1 className={classes.App_title}>Welcome to React6</h1>
          </header>
          <p className={classes.App_intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {this.state.showPersons ? this.state.persons.map((p, i) => {
            return <ErrorBoundary><Person key={p.id} {...p}
                           click={this.deletePersonHandler}
                           changed={(event) => this.nameChangedHandler(event, p.id)}/>
            </ErrorBoundary>;
          }) : null}
        </div>
    );
  }
}

export default App;
