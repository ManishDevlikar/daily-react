import { useState } from "react";
import Input from "./Input";
import Display from "./Display";
function Lifting(){
    const [data, setdata] = useState("");
    return(
        <>
        <Input text={data} textChange={setdata}/>
        <Display text={data}/>
        </>
    )
}

export default Lifting;