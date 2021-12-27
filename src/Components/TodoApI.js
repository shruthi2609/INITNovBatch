import React  from "react";
class TodoAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }

    componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").
        then((response)=>{
           return response.json()
        }).
        then((data)=>{
            this.setState({todos:data})
            console.log(this.state.todos)
        })
    }
    render(){
        return(
            <div>
                <h1> Todo API :</h1>
            </div>
        )
    }
}
export default TodoAPI