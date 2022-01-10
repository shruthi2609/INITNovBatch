import React from "react";
import { useState,useEffect } from "react";
const NewsAPIHooks =()=>{
    const [news,setNews]=useState([])
    const callNewsAPI=()=>{
        fetch("https://hn.algolia.com/api/v1/search?query=react").
            then(result=>result.json()).then(data=>setNews(data.hits))
    }
    useEffect(
        ()=>{
            callNewsAPI()
        }
    )
    return(
        <div>
            <h1>News App</h1>
            {
                news.map(
                    (item)=>(  
                        <div>
                            <p>{item.title}</p>
                            <a href={item.url}>read here</a>
                        </div>
                    )
                )
            }
        </div>
    )
}
export default NewsAPIHooks