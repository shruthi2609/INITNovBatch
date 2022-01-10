import React from "react"
import {useSelector} from "react-redux"
function Profile(){
    const result=useSelector((state)=>state.user.value)
    console.log(result)
    return(
        <div>
            <h2> Profile info</h2>
            <h3>Username :{result.fname}</h3>
            <h4>Email :{result.email}</h4>
            <h5>designation :{result.designation}</h5>
        </div>
    )
}
export default Profile