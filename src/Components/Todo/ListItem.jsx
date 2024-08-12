import { useState } from "react";

function ListItem({todo,deleteTodo,checkTodo,check}){

    return(
        <>
            <li className={`flex justify-between p-[0.8rem] bg-zinc-900 border-none outline-none rounded-full text-red-100 ${check?"line-through":""}`}>{todo.content.toUpperCase()}  
            <div className="flex gap-3"><span onClick={()=>checkTodo(todo)} className="btn-c-d">check</span> <span className="btn-c-d" onClick={()=>deleteTodo(todo.id)}>delete</span></div></li> 
        </>
    )
}

export default ListItem;