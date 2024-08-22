import { forwardRef } from "react"

export const Child= forwardRef(({label,display},ref)=>{

    return (
        <>
            <label className="text-white">{label}</label>
            <input className="bg-white" type={label} ref={ref} />
            <button className="w-[5rem] bg-red-500" onClick={display}>Click Me</button>
        </> 
    );
})