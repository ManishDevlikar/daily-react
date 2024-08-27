import React from 'react'
import { useState } from 'react'
import Memo from './Memo';

function CounterWithMemo() {
    const[count,setCount] = useState(0);
    function increaseCount(){
        setCount(count+1);
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increaseCount}>update</button>

      <Memo/>
    </div>
  )
}

export default CounterWithMemo
