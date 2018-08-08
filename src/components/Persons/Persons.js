import React from 'react'
import Person from "./Person/Person";

const persons = (props) => props.persons.map((p, index) => {
      return <Person
        key={p.id} {...p}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, p.id)}
      />
  })

export default persons
