import { useState } from "react";

function UseState4()
{
    const[apples,setApples]=useState(0);
    return(
        <>
    <h1>Number Of Apples:{apples}</h1>
    {apples===0?(
        <p>No apples left</p>
    ):(
        <p>Great! you have some apples</p>
    )
    }
    <button onClick={()=>setApples(apples+1)}>Add 1 Apple</button>
    <button onClick={()=>setApples(apples-1)}>Remove 1Apple</button>
    <button onClick={()=>setApples(0)}>Reset</button>
  </>
        
    )
}
export default UseState4;