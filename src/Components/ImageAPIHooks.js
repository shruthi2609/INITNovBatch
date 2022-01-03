import React from "react";
import { useState } from "react";
import axios from "axios"
const ImageAPIHooks =()=>{
    const [images,setImages]=useState([])
    const [search,setSearch]=useState("")
    const callUnsplashAPI=(query)=>{
        console.log(query)
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page=1&query="
        axios.get(url+query).then((obj)=>setImages(obj.data.results)).catch((err)=>console.log(err))
    }
    const handleSearch=(event)=>{
        event.preventDefault()
        callUnsplashAPI(search)

    }
    const handleChange=(event)=>{
        setSearch(event.target.value)
    }
    return(
        <div>
            <h3>Image Search Engine , Enter your search text!</h3>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="enter the text" onChange={handleChange}></input>
                <input type="submit" value="search"></input>
            </form>
           {images.map((item)=>(<img src={item.urls.small} alt="no image"></img>))}
            </div>
    )
}
export default ImageAPIHooks