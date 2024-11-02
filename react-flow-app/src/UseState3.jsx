import { useState } from "react";

function UseState3()
 {
    const[score,setScore]=useState(0)
    

    
    return(
        <>
        <h1>CricketScore:{score}</h1>
        <button  onClick={()=>setScore(score+1)}>+1</button>
        <button  onClick={()=>setScore(score+2)}>+2</button>
        <button  onClick={()=>setScore(score+3)}>+3</button>
        <button  onClick={()=>setScore(score+4)}>+4</button>
        <button  onClick={()=>setScore(score+5)}>+5</button>

        </>
    )
    
}
export default UseState3;