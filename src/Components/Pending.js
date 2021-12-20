import React from "react";
class Pending extends React.Component{
    constructor(props){
        super(props)
    
    }
    render(){

    
        return(
            <div>
                <h2> Pending Tasks are :</h2>
                {
                    this.props.items.map((item)=>
                    <div>
                         <p>{item.title}</p>
                         <button>done</button>
                         <button>delete</button>
                    </div>
                   )
                }
            </div>
        )
    }
    
}
export default Pending;