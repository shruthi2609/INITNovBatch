import React from "react";
class Pending extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const myStyle={
            color:"aqua",
            fontFamily:"Arial"
        }
        return(
            <div>
                <h2 style={{backgroundColor:"red"}}> Pending Tasks are :</h2>
                {
                    this.props.items.map((item)=>(
                        (item.active)?
                        <div style={myStyle}>
                         <p>{item.title}</p>
                         <button className="btn-primary"
                         onClick={()=>this.props.fun1(item.id)}>done</button>
                         <button  onClick={()=>this.props.fun2(item.id)}>delete</button>
                         </div> : <></>
                    )
                   )
                }
            </div>
        )
    }
    
}
export default Pending;