import { useEffect, useState } from "react";
import { ThemeContex } from "./ThemeContext";

export function ThemeProvider({children}){


    function getInitialTheme(){
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            return storedTheme;
        }
        const prefersDarkMode=window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode?'dark':'light';

    }

    const [theme,setTheme] = useState(getInitialTheme);
    
    useEffect(()=>{
        localStorage.setItem('theme',theme);

        if(theme==='dark'){
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-gray-900'); 
            document.body.classList.remove('bg-white'); 
        }else{
            document.documentElement.classList.remove('dark');
            document.body.classList.add('bg-white');   
            document.body.classList.remove('bg-gray-900');
        }
    },[theme])

     function handleTheme (){
      return setTheme((prev)=>prev === 'dark' ? 'light' : 'dark');
    }


    return(
        <ThemeContex.Provider value={{theme,handleTheme}}>
            {children}
        </ThemeContex.Provider>
    )
}