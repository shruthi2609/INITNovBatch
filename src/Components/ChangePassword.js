import axios from "axios"
import { useState } from "react"
import {getAuthHeader} from '../helpers/AuthHeader'
const ChangePassword=()=>{
    const [email,setEmail]=useState("")
    const [updatedPassword,setUPassword]=useState("")
    const [status,setStatus]=useState()
    const handleChange=(e,key)=>{
        if(key==="email")
        setEmail(e.target.value)
        else if(key==="password")
        setUPassword(e.target.value)
    }
    
    const updateUser=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/updateUser",{"email":email,"updatedpassword":updatedPassword},{headers:getAuthHeader()}).then((res)=>
        {
        console.log(res.data.status)
        setStatus(res.data.status)
        }).catch((err)=>console.log("err"))

    }
    return(
        <form>
        <input type="text" placeholder="enter email" onChange={(e)=>handleChange(e,"email")}></input>
        <input type="text" placeholder="enter updated password" onChange={(e)=>handleChange(e,"password")}></input>
        <button onClick={(e)=>updateUser(e)}>update</button>
        
        </form>   
    )
}
export default ChangePassword