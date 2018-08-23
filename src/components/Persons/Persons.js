import React, {PureComponent} from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {
  
  constructor(props) {
    super(props)
    
    console.log('[Persons.js] Inside Constructor', props)
    this.lastPersonRef = React.createRef()
  }
  
  componentWillMount() {
    console.log('[Persons.js] Inside Will Mount]')
  }
  
  componentDidMount() {
    console.log('[Persons.js] Inside Did Mount]')
    this.lastPersonRef.current.focusme()
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons
  //     || nextProps.changed !== this.props.changed
  //     || this.props.clicked !== nextProps.clicked
  //   //return true
  // }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
  }
  
  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate')
  }
  
  render() {
    console.log('[Persons.js] Inside render')
    const props = this.props

    return (props.persons.map((p, index) => {
        return <Person
          key={p.id} {...p}
          position={index}
          click={() => props.clicked(index)}
          ref={this.lastPersonRef}
          changed={(event) => props.changed(event, p.id)}
        />;
      })
    );
  }
}

export default Persons;
