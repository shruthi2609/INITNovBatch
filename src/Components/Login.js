import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {login,logout} from "../reducers/user"
function Login(){
    const [demo,setDemo]=useState("sample")
    const dispatch=useDispatch()
    const trigerActionLogin=()=>{
        dispatch(login({fname:"john",
            email:"john@gmail.com",designation:"SSE"}))
    }
    const trigerActionLogout=()=>{
        dispatch(logout())
    }
    return(
        <div>
            <button 
            onClick={trigerActionLogin}> Login
            </button>
            <button
            onClick={trigerActionLogout}>Logout</button>
        </div>
    )
}
export default Login