import { useState } from "react";


export let getRandom = () =>{
    console.log("get Random");
    return Math.random();
}



export default function Counter () {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState( ()=>{
        return getRandom();
    })

    return (
        <div>
            <h1>count {count1}</h1>
            <h1>count Random {count2}</h1>
            <button onClick={()=> setCount1(count1 + 1)}>click</button>
            <button onClick={()=> setCount2(count2 + 1)}>click</button>
        </div>
    )
}