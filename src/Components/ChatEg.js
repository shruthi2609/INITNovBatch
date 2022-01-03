import React from "react";
import { useState } from "react";
const ChatEg=()=>{
    const [username,setUserName]=useState("no user")
    const [msg,setMsg]=useState("no message")
    const changeState=(event,key)=>{
     if(key==="username")
      setUserName(event.target.value)
      else if(key==="msg")
      setMsg(event.target.value)
    }
    return(
        <div>
            <h3>From :{username}</h3>
            <h2>Your message :{msg}</h2>
            <form>
                <input type="text" placeholder="enter username"
                onChange={(e)=>changeState(e,"username")}></input>
                <input type="text" placeholder="enter your message"
                onChange={(e)=>changeState(e,"msg")}
                ></input>
            </form>

        </div>
    )
}
export default ChatEg