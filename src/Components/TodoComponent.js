import React  from "react";
import Pending from './Pending'
import Completed from './Completed'
let todo=[
    {
        title:"complete react session on 20.12.2021",
        completionStatus:true
    },
    {
        title:"watch a movie",
        completionStatus:false
    },
    {
        title:"complete project",
        completionStatus:true
    },
    {
        title:"upload a youtube video",
        completionStatus:false
    },
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:todo
        }
    }
    getPendingItem=()=>{
        const arr=this.state.todos.filter((item)=>item.completionStatus===false)
        return arr;
    }
    getCompletedItems=()=>{
        const arr=this.state.todos.filter((item)=>item.completionStatus===true)
        return arr;
    }
    render(){
        return(
            <div>
                <Pending items={this.getPendingItem()}> </Pending>
                <Completed items={this.getCompletedItems()}></Completed>
            </div>
        )
    }

}
export default TodoComponent;