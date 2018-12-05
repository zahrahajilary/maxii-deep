import React,{Component} from 'react'
import Radium from 'radium'
import withClass from '../../../hoc/WithClass'
import Aux from '../../../hoc/Aux'

class Person extends Component{
   
    render (){
        const style= {
            backgroundColor:'#eee'
        }
        return (

            <Aux>
                <p onClick={this.props.click}>my name is {this.props.name},and im {this.props.age} years old</p>
                <p>{this.props.childern}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </Aux>
        ) 
    }
}



export default withClass(Radium(Person))