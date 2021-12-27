import React from 'react'
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"inital message"
        }
    }
    componentDidMount=()=>{
       setTimeout(() => {
            this.setState({msg:"message updated"})
        }, 5000);
    }
    componentDidUpdate=(prevState)=>{
        if(prevState.msg!==this.state.msg)
        {
            document.getElementById("lifecycle").innerHTML="there is a change"
        }
    }
    render(){
        return(
            <div>
                <h3> {this.state.msg}</h3>
                
            </div>
        )
    }
}
export default LifeCycleMethods