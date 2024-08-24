import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export function UserProvider ({children}){
    const [user,setUser]=useState({
        name:'',
        age:'',
        education:''
    });

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}