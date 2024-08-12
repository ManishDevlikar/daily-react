import React from "react";
import { useState } from "react";
import DateC from "./DateC.jsx";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import EditTodo from "./EditTodo.jsx";
import ListItem from "./ListItem.jsx";


function Todo(){
    const [text,setText]=useState({
        id:"",
        content:"",
        check:false,
    });
    const[todos,setTodos]=useState(()=>{
        const localData=localStorage.getItem("todo-app");
        return localData?JSON.parse(localData):[];
    });

   const addTodo=function(){
    if(text.content===''){
        alert('Please enter a todo');
        return;
    }

    const isContentExist=todos.find(todo=>todo.content===text.content);
    if(isContentExist){
        alert("content alraedy exist")
        setText({  id:"",
                   content:"",
                   check:false,
                });
        return;
    }

    const {id,content,check} = text;
    setTodos((prev)=>[...prev , {id,content,check}])
    setText( { id:"",
        content:"",
        check:false,});   
}


// adding to local storage
localStorage.setItem("todo-app",JSON.stringify(todos));

    const deleteAll = function(){
        setTodos([]);
    }

    const deleteTodo=function(todoId){
        const updatedTodos=todos.filter(t=>t.id!==todoId);
        setTodos(updatedTodos);
    }

 const checkTodo = function(val){
  const updatedTodos= todos.map((todo)=>{
        if(todo.content===val.content){
           return { ...todo, check:!todo.check}
        }else{
            return todo
        }     
    })
    setTodos(updatedTodos);
    console.log(...updatedTodos);
    
 } 


    return (
        <>
    
            <div className="w-[80%] m-auto flex flex-col">
                <Header/>
                <DateC/>
            </div>

            <div className="w-[80%] m-auto flex justify-center align-middle gap-4 mt-16 ">
               <Input text={text} setText={setText}/>
               <EditTodo editIt={addTodo} func="Add"/>
            </div>

            <div className="w-[100%] mt-[2rem] flex flex-col items-center justify-center gap-4 ">
                <ul className="w-[30%] m-auto flex flex-col gap-1 ">
                    {todos.length>0 && todos.map((todo)=>{
                        return(
                            <ListItem key={todo.id} 
                            todo={todo} 
                            deleteTodo={deleteTodo}
                            check={todo.check}
                            checkTodo={checkTodo}    
                            />
                        )
                    })}
                </ul>
                {todos.length>0 && <EditTodo editIt={deleteAll} func="Delete All"/>}
            </div>
                <div className="m-auto w-[90%] h-[90vh] bg-red-500 -z-10 absolute top-0 right-0 left-0 clip-path-cross-cut">
            </div>
        </>
    )
}

export default Todo;