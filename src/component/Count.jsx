import React, { useState } from 'react';
import './Count.css'

function Count() {

  const [name, setName] = useState("Somthing");

  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const dicrement = () => {
    if(count > 0){
      setCount(count - 1)
      
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>Name : {name}</h2>
      <button onClick={() => setName("o stry kal aana")}>Chang Name</button>

      <h2>{count}</h2>

      <div className='btn'>
      
      <button onClick={increment}>Increment</button>

      <button onClick={dicrement}>Dicrement</button>

      <button onClick={reset}>Reset</button>
      
      </div>  


    </div>
  )
}

export default Count;
