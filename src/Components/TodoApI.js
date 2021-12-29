import React  from "react";
import axios from 'axios'
class TodoAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:[]
        }
    }

    componentDidMount=()=>{
        /*fetch("https://jsonplaceholder.typicode.com/todos").
        then((response)=>{
           return response.json()
        }).
        then((data)=>{
            this.setState({todos:data})
            console.log(this.state.todos)
        })*/
        axios.get("https://jsonplaceholder.typicode.com/comments").
        then((obj)=>this.setState({comments:obj.data})).catch((err)=>console.log(err))

    }
    render(){
        return(
            <div>
                <h1> Todo API :</h1>
               {this.state.comments.map((item)=>(
                   <div>
                       <h2>{item.name}</h2>
                       <h4>{item.email}</h4>
                       <p>{item.body}</p>
                    </div>
               ))}
            </div>
        )
    }
}
export default TodoAPI