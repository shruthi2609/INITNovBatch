import React from 'react'
class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }
    increment=()=>{
      this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
      }
    render(){
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <h4>{this.state.count}</h4> 
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default AddItem