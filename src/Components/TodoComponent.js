import React  from "react";
import Pending from './Pending'
import Completed from './Completed'
let todo=[
    {
        title:"complete react session on 20.12.2021",
        completionStatus:true,
        id:1,
        active:true
    },
    {
        title:"watch a movie",
        completionStatus:false,
        id:2
    },
    {
        title:"complete project",
        completionStatus:true,
        id:3
    },
    {
        title:"upload a youtube video",
        completionStatus:false,
        id:4
    },
    {
        title:"upload a youtube video",
        completionStatus:false,
        id:5
    },
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:todo
        }
    }
    changeCompletionStatus=(todoId)=>{
        const temp=[...this.state.todos]
        const obj=temp.find((item)=>item.id===todoId)
        obj.completionStatus=!obj.completionStatus
        this.setState({todos:temp})
        
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
                <Pending items={this.getPendingItem()} fun1={this.changeCompletionStatus}> </Pending>
                <Completed items={this.getCompletedItems()}></Completed>
               
            </div>
        )
    }

}
export default TodoComponent;