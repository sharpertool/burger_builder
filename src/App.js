import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'xx', name: 'Max', age: 28},
      {id: 'xxy', name: 'Manu', age: 29},
      {id: 'xxz', name: 'Stephanie', age: 26},
    ],
    showPersons: false
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
    const idx = this.state.persons.findIndex(p => p.id === id)
    const persons = [...this.state.persons]
    persons[idx].name = event.target.value
    this.setState({persons: persons});
  };
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons:persons})
  }
  
  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  };
  
  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inerit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React6</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {this.state.showPersons ? this.state.persons.map((p, i) => {
          return <Person key={p.id} {...p}
                         click={this.deletePersonHandler}
                         changed={(event) => this.nameChangedHandler(event, p.id)}/>
        }) : null}
      </div>
    );
  }
}

export default App;
