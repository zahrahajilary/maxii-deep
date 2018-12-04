import React from 'react'
import '../../Container/App.css'
import Radium,{StyleRoot} from 'radium'

const cockpit = (props)=> {

    const clasess = []
    if(props.showPersons){
        if(props.persons.length <= 2){
            clasess.push('red')
          }
          if(props.persons.length <=1 ){
            clasess.push('bold')
          }
    } 
     const style = {
        backgroundColor:'green',
        color:'white',
        padding:'15px',
        border:'1px solid black',
        textAlign:'center',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'ligthgreen',
          color:'black'
        }
      }
    return(
        <div className="App">
            <p className ='button'>This is a React App</p>
            <button onClick={props.clicked} style={style}>clickme</button>
        </div>
     
    )
}
export default Radium(cockpit)