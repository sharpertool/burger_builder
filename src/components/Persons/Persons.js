import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  
  render() {
    const props = this.props

    return (props.persons.map((p, index) => {
        return <Person
          key={p.id} {...p}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, p.id)}
        />;
      })
    );
  }
}

export default Persons;
