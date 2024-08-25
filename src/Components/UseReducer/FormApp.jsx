import React, { useId } from 'react'
import { useReducer } from 'react'

function FormApp() {

    const initialStates={
        name: "",
        age: 0,
        email: "",
        password: "",
    }

    function reducer(state,action){
        switch(action.type){
            
            case'update':
            return{...state, [action.field]:action.value};
            case'reset':
            return initialStates;
            default:
            return state
        }
    }

    const handleChange=(e)=>{
        dispatcher({
            type:'update',
            field:e.target.name,
            value:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submited state => "+ JSON.stringify(state));
        
    }

    const handleClear=()=>{
        dispatcher({type:'reset'})
    }

    const [state,dispatcher] = useReducer(reducer,initialStates);

    const id = useId();

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor={id+'username'}/>
            <input id={id+'username'} name='name' type='text' placeholder='enter your username' value={state.name} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor={id+'age'}/>
            <input id={id+'age'} name='age' type='number' placeholder='enter your age' value={state.age} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor={id+'email'}/>
            <input id={id+'email'} name='email' type='email' placeholder='enter your email' value={state.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor={id+'password'}/>
            <input id={id+'password'} name='password' type='password' placeholder='enter your passwod' value={state.password} onChange={handleChange}/>
            </div>
            <div>
            <input type='submit'/>
            </div>
        </form>
            <button onClick={handleClear}>reset</button>
    </>
  )
}

export default FormApp
