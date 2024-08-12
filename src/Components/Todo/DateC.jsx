import { useEffect, useState } from "react";


function DateC() {
    const [currDate, setCurrDate] = useState("")
    useEffect(() => {
        const intervalId= setInterval(() => {
        let  date = new Date();
        setCurrDate(`${date.toLocaleDateString()}-${date.toLocaleTimeString()}`)
       }, 1000);
       return ()=>clearInterval(intervalId);
   }, [])

    return (
        <>
        <p className="text-red-900 self-center text-base font-bold">
            {`${currDate}`}</p>
        </>
    )
}

export default DateC;
