import React from 'react'
import Person from './Person/person'
 const persons = (props) => {
     return (
        <div>
        {props.persons.map((person, key) => {
          return(
            <Person name = {person.name} 
            age = {person.age} 
            key = {person.id}
            click = { () => { props.clicked(key) }}
            changed = {(event) => props.changed(event,person.id)}
            />
            )
        })}
       
      </div>
     )
    
 }
 export default persons