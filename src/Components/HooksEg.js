import React from "react";
import { useState } from "react";
const HooksEg=()=>{
const [msg,setMsg]=useState("inital message")
const [loggedIn,setLoggedIn]=useState(false)
const changeLoginStatus=()=>{
setLoggedIn(true)
}
return(
    <div>
        {
            loggedIn?<h1>{msg}</h1>:<h2>Please Login </h2>
        }
        <button onClick={changeLoginStatus}>log in</button>
        <button onClick={()=>{setMsg("welcome User")}}> Update Msg </button>
    </div>
)
}
export default HooksEg