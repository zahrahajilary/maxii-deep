import React,{Component} from 'react'

// const withClass = (WrappedComponent,className)=> {
//     return (props)=>(
//         <div className = {className}>
//         <WrappedComponent {...props}/>
//         </div>
//     )
// }

    
     const withClass = (WrappedComponent,className)=> {
        return class extends Component {
            render(){
                return(
                    <div className = {className}>
                        <WrappedComponent {...this.props}/>
                    </div>
                )       
            }
        }     
     }
    
    


export default withClass 

//typical function just get two argument and return a function, every function can return function 
