import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const SigninForm=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [status,setStatus]=useState(false)
    const [msg,setMsg]=useState()
    const navigate=useNavigate()
  /*  const handleEmail=(e)=>{
        console.log("uname",e.target.value)
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        console.log("password",e.target.value)
        setPassword(e.target.value)
    }*/
    const handleChange=(e,key)=>{
        if(key==="email")
        setUsername(e.target.value)
        else if(key==="password")
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/signin",{email:username,password:password}).
        then((res)=>{setStatus(res.data.status)
        setMsg(res.data.message)}).catch((err)=>console.log(err))
    }
    const handleNavigate=()=>{
        navigate("/ImageSearch")
    }
    return(
        <div>
          
            <form>
            {
            status?handleNavigate():<h1>Please Login</h1>
            }
            <h1>{msg}</h1>
                <input type="text" placeholder="enter email" onChange={(e)=>handleChange(e,"email")}></input>
                <input type="text" placeholder="enter password" onChange={(e)=>handleChange(e,"password")}></input>
                <button onClick={(e)=>handleLogin(e)}>login</button>
            </form>
           

        </div>
    )
}
export default SigninForm