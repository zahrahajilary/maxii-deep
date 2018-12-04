import React from 'react'
import Radium from 'radium'

const person  = (props) => {
    
    const style = {
        '@media(min-width:500px1)' :{
            width: '400px'
        }
    }
        return (
            <div style={style}>
                <p onClick={props.click}>my name is {props.name},and im {props.age} years old</p>
                <p>{props.childern}</p>
                <input type="text" onChange={props.changed} value = {props.name}/>
            </div>
            

        )
    
}
export default Radium(person)