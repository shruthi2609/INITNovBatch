import React from "react";
class LifeCycleMethod extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"constructor",
            count:0
        }
    }
  /*  componentWillMount(){
  console.log("will mount")
    }
    componentDidMount(){
    console.log("did mount")
    }*/
    componentDidUpdate(){
        console.log("did update")
    }
    changeMsg=()=>{
        console.log("custom method")
        this.setState({msg:"constructor"})
        this.setState({count:0})
    }
    shouldComponentUpdate(newProps,newState){
        if(this.state.msg!=newState.msg){
            return true
        }
        else{
            return false
        }
    }
    render(){
        console.log("render ")
        return(
            <div>
                <h1> LifeCycle - Reconciliation</h1>
                <h2> {this.state.msg}</h2>
                <button onClick={this.changeMsg}>test</button>
            </div>
        )
    }
}
export default LifeCycleMethod