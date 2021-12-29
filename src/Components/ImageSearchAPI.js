import React from "react";
import axios from 'axios'
class ImageSearchAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            search:" "
        }
    }
    callUnsplashAPI=(query)=>{
        console.log(query)
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page=1&query="
        axios.get(url+query).then((obj)=>this.setState({images:obj.data.results})).catch((err)=>console.log(err))
    }
    handleSearch=(event)=>{
        event.preventDefault()
        this.callUnsplashAPI(this.state.search)
    }
    handleChange=(event)=>{
        event.preventDefault()
        this.setState({search:event.target.value})
    }
   
    render(){
        return(
            <div>
                <h3>Image Search Engine , Enter your search text!</h3>
            <form onSubmit={this.handleSearch}>
                <input type="text" placeholder="enter the text" onChange={this.handleChange}></input>
                <input type="submit" value="search"></input>
            </form>
           {this.state.images.map((item)=>(<img src={item.urls.small} alt="no image"></img>))}
            </div>
        )
    }
}
export default ImageSearchAPI