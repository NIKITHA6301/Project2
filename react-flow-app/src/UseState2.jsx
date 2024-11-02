import { useState } from "react";

function UseState2()
{
    const[count,setCount]=useState(0)
    
    const handlingIncrement=()=>{
        setCount(count+1);
    }
        const handlingDecrement=()=>{
            setCount(count-1);
        }
    
    return(
        <>
        <h1>This is Counter Value:{count}</h1>
        <button style={{color:"green"}} onClick={handlingIncrement}>Increment</button>
        <button style={{color:"red"}} onClick={handlingDecrement}>Decrement</button>
        </>
    )
}
export default UseState2;