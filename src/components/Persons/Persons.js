import React, {Component} from 'react'
import Person from './Person/person'
 class Persons extends Component{

  componentWillMount(){
    console.log('[persons.js] Inside ComponentWill Mount')
  }

  componentDidMount(){
    console.log('[pwesons.js] inside did mount')

  }

  componentWillReceiveProps(nextProps){
    console.log('[person.js] inside component will reviece ',nextProps)
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[update Person.js] inside person.js',nextProps,nextState ) 
    return nextProps.persons !== this.props.persons

  }

  componentWillUpdate(nextProps,nextState) {
    console.log(' update [App.js] inside persons.js',nextProps,nextState)
  }

  componentDidUpdate(){
    console.log('[did Update]')
  }

   render () {
    return (
      <div>
      {this.props.persons.map((person, key) => {
        return(
          <Person name = {person.name} 
          age = {person.age} 
          key = {person.id}
          click = { () => { this.props.clicked(key) }}
          changed = {(event) => this.props.changed(event,person.id)}
          />
          )
      })}
     
    </div>
   )
   }  
 }
 export default Persons 