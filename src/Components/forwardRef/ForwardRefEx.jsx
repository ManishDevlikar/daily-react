import { useRef } from "react";
import { Child } from "./Child";

export function ForwardRefEx(){
    const userIdRef=useRef(null);
    const passwordRef=useRef(null);

    function display(){
        console.log(userIdRef.current.value);
        console.log(passwordRef.current.value);
        
        
    }
return(
    <>
  
    <Child display={display} label="input"   ref={userIdRef}/>
   
    <Child display={display} label="password" ref={passwordRef}/>

    </>
)


}