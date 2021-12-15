import React from 'react'
class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }
        render(){
            return(
            <div>
              <button>+</button>
            {this.state.count}
              <button>-</button>
            </div>
            )
        }

    }
export default AddItem;