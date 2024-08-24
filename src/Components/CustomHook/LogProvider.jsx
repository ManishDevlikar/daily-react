import { useState } from "react";
import { LoggedContext } from "./LoggedContext";

export function LogProvider({children}){
    const [isLogged,setlogged] = useState(false);

    return (
       <LoggedContext.Provider value={{isLogged,setlogged}}>
        {children}
       </LoggedContext.Provider> 
    )
}