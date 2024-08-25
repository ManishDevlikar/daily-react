import React from "react";
import { useReducer } from "react";

function CounterApp() {
  const initialState = {
    count: 0,
  };

 const reducer=(state, action)=>{
     switch (action.type) {
      case 'increment':
          return {...state, count: state.count + 1 };
      case 'decrement':
          return {...state, count: state.count - 1 };
      case 'reset':
        return {...state,count:0} 
      case 'by5':
        return {...state,count:state.count+5}     
      default:
          return state;
    }
 } 

  const [state, dispatch] = useReducer(reducer, initialState);

  return<>
    <input value={state.count}/>
    <button className="p-1 border-2 border-red-500" onClick={() => dispatch({ type: 'increment' })}>increment</button>
    <button className="p-1 border-2 border-red-500" onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    <button className="p-1 border-2 border-red-500" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    <button className="p-1 border-2 border-red-500" onClick={() => dispatch({ type: 'by5' })}>incrementBy5</button>
  </>;
}

export default CounterApp;
