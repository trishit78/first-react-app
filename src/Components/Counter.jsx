import React,{Component,useState} from 'react'

function Counter() {
  
    let [count,setCount] = useState(0);

    const incrementCounter=() => {
        setCount(count+1);
    }
  
    const decrementCounter=() => {
        setCount(count-1);
    }
  
    return (
    <>
    <button onClick={incrementCounter} >+</button>
    <p>{count}</p>
    <button onClick={decrementCounter} >-</button>
    </>
  )
}

export default Counter
