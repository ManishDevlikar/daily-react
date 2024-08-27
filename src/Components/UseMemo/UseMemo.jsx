import React, { useMemo, useState } from 'react'
import Expensive from './Expensive';

function UseMemo() {
    const [count,setCount]=useState(0);


    const user= useMemo (()=>{
        return {name:'John',age:30}
    },[]);

    // if we are using memo only at exporting componenat then it wont give expected result when we pass prop 
    // at time like this we have to store the expensive functions which we dont want to rerender in useMemo() hook
  return (
    <div>      
      <p onClick={()=>{setCount(count+1)}}>Count: {count}</p>
      <Expensive user={user}/>
    </div>
  )
}

export default UseMemo
