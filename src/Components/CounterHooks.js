import React from "react";
import { useState } from "react";
const CounterHooks=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0)
        {
            setCount(count-1)
        } 
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    )
}
export default CounterHooks