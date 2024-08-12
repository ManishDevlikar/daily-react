function Input({text,setText}){
    const handleText= function (value){
        setText({id:value,content:value,check:false})
    }
    return(
        <>
             <input
                    className="w-[40%] bg-white text-black text-[1.5rem] outline-none pl-1 rounded-md placeholder:text-red-300" 
                    type="text" 
                    value={text.content}
                    onChange={(e)=>handleText(e.target.value)} 
                    placeholder="Enter your todo"
                />
        </>
    )
}

export default Input;