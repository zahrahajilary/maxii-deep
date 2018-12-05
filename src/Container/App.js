import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/person.js'
import Radium, { StyleRoot } from 'radium'
import ErrorBoundry from '../ErrorBundry/ErrorBundry'
import Persons from '../components/Persons/Persons'
import CockPit from '../components/Cookpit/Cookpit'
import withClass from '../hoc/WithClass'
import Aux from '../hoc/Aux'


class App extends Component {

  constructor(props){
    super(props)
    console.log('[App.js] inside Constructor',props)
    
  }

  componentWillMount (){
    console.log('[App.js]')
  }

  componentDidMount (){
    console.log(`[app.js] component did mount`)
  }
  state = {
    persons: [
      { id: '1', name: 'zahra', age: 12 },
      { id: '2', name: 'hoseein', age: 13 },
      { id: '3', name: 'ali', age: 39 }
    ],
    showPerson: false,
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    // const persons = this.state.persons
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }
  toggleHandler = () => {
    const showPerson = this.state.showPerson
    this.setState({
      showPerson: !showPerson
    })
  }
  render() {
    
    console.log(`[app.js] inside render()`)
    let persons = null
    if (this.state.showPerson) {
      persons =
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }
    return (
      <StyleRoot>
       <Aux>
        <button onClick={()=> {this.setState({showPersons:true})}} ></button>
          <CockPit showPersons={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.toggleHandler}
          />
          {persons}
        </Aux>
      </StyleRoot>

    );
  }
}

export default withClass(App,'App')
