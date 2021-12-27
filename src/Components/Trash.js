import React from "react";
class Trash extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2> Deleted Items are :</h2>
                {
                    this.props.items.map((item)=>
                    <div>
                         <p>{item.title}</p>
                         <button>delete</button>
                    </div>
                   )
                }
            </div>
        )
    }
    
}
export default Trash;