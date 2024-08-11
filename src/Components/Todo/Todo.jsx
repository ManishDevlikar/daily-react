import React from "react";
import { useState,useEffect } from "react";
import DateC from "./DateC.jsx";
import Header from "./Header.jsx";
function Todo(){
   let  date = new Date();
   const [text,setText]=useState("");
   const[todos,setTodos]=useState([]);
   const addTodo=function(){
    if(text===''){
        alert('Please enter a todo');
        return;
    }
    if(todos.includes(text)){
        alert('Todo already exists');
        setText("");
        return;
    } 
    setTodos((prev)=>[...prev , text])
    setText("");   
}

   const [getDate, setgetDate] = useState({
    hour:date.getHours(),
    minute:date.getMinutes(),
    sec:date.getSeconds()
   })
   useEffect(() => {
  const intervalId= setInterval(() => {
        setgetDate({hour:date.getHours(),minute:date.getMinutes(),sec:date.getSeconds()})
       }, 1000);
       return ()=>clearInterval(intervalId);
   }, [])
 
    return (
        <>
            <div className="w-[80%] m-auto flex flex-col">
                <Header/>
                <DateC date={date} getDate={getDate} />
            </div>

            <div className="w-[80%] m-auto flex justify-center align-middle gap-4 mt-16">
                <input
                    className="w-[40%] bg-white text-black text-[1.5rem] outline-none pl-1 rounded-md placeholder:text-red-300" 
                    type="text" 
                    value={text}
                    onChange={(e)=>setText(e.target.value)} 
                    placeholder="Enter your todo"
                />
                <button
                className="bg-red-900 w-32 text-white py-3 rounded-md" 
                onClick={addTodo}
                >Add</button>
            </div>

            <div className="mt-[5rem]">
            <ul className="w-[40%] m-auto flex flex-col align-middle justify-center gap-1">
                {todos.length>0 && todos.map((todo,key)=>{
                    return(
                        <li className="flex justify-between p-[0.8rem] bg-white border-red-200 border-2 rounded-md text-black" key={key}>{todo}  
                        <div className="flex gap-3"><span className="btn-c-d">check</span> <span className="btn-c-d">delete</span></div></li> 
                    )
                })}
            </ul>
            </div>
        </>
    )
}

export default Todo;