import { useState } from "react";

function UseState1()
{
    const[count,setCount]=useState(0)
    const handlingClick=()=>{
        setCount(count+1);

    }
    return(
        <>
        <h1>This is counter Value:{count}</h1>
         
         <button style={{color:"green"}} onClick={handlingClick}>Increment</button>
         </>

    )
    
}
export default UseState1;
