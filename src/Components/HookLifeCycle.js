import React from 'react'
import { useState,useEffect } from 'react'
const HookLifeCycle=(props)=>{
    const [userName,setUsername]=useState("")
    const [stream,setStream]=useState("CSE")
    /*useEffect(
        ()=>{
        setUsername(props.uname)
        setStream(props.stream)
        },[props,userName]
    )
    1.useEffect(
()=>setCustomMethod()
)

2.useEffect(
()=>setCustomMethod(),[]
)

re-render only once

3.useEffect(
()=>setCustomMethod(),[props]
)

3 props => any one of the props is changing

3.1 useEffect(
()=>setCustomMethod(),[props.propname]
)
*/
    useEffect(
       ()=> console.log("useeffect called"),[userName]
    )
    const changeUsername=()=>{
        setUsername("new name")
    }
    return(
        <div>
            <h2>{userName}</h2>
           <h3>{stream}</h3>
            <button onClick={changeUsername}> ok </button>
          
        </div>
    )
}
export default HookLifeCycle