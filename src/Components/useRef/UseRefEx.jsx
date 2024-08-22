import { useRef } from "react"

export const UseRefEx = ()=>{
    const inputRef = useRef(null)
    function handleInput(){
        inputRef?.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef}/>
            <button className="bg-red-500 w-[5rem] text-white"  onClick={handleInput}>input 1</button>
            <input type="text"/>
        </>
    )
}