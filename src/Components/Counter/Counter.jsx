import { useState } from "react";

function Counter(){
    const[count,setCount]= useState(0);

    function addCount(){
        setCount(count+1);
    }
    function reduceCount(){
        if(count>0)
        setCount(count-1);
    }
    function resetCount(){
        setCount(0);
    }
    return (
        <>
            <div className="transition-all ease-in-out shadow-sm hover:scale-105 shadow-red-700  w-1/4 m-auto h-72 flex flex-col mt-40 align-middle justify-center gap-28 hover:shadow-md hover:shadow-red-700">
                <p className="transition-all ease-in-out text-white text-center ring-1 ring-red-700   hover:ring-2 hover:ring-red-700 pl-16 pr-16 pt-2 pb-2 self-center hover:bg-slate-300 text-[18px] hover:scale-105 hover:text-black">Count<span className="text-red-800 pl-3 text-[20px]">{count}</span></p>
                <div className="transition-all ease-in-out duration-1000 flex align-middle justify-center gap-5">
                <button className="transition-all ease-in-out duration-200 pl-7 pr-7 pt-2 pb-2 text-white shadow-sm shadow-red-700 hover:shadow-md hover:shadow-red-700 scale-100 hover:scale-105 focus:scale-100 focus:shadow-sm focus:shadow-red-700" onClick={addCount}>Add</button>
                <button className="transition-all ease-in-out duration-200 pl-7 pr-7 pt-2 pb-2 text-white shadow-sm shadow-red-700 hover:shadow-md hover:shadow-red-700 scale-100 hover:scale-105 focus:scale-100 focus:shadow-sm focus:shadow-red-700" onClick={reduceCount}>Reduce</button>
                <button className="transition-all ease-in-out duration-200 pl-7 pr-7 pt-2 pb-2 text-white shadow-sm shadow-red-700 hover:shadow-md hover:shadow-red-700 scale-100 hover:scale-105 focus:scale-100 focus:shadow-sm focus:shadow-red-700" onClick={resetCount}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter;
