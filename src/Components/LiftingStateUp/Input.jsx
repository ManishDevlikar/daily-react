function Input({text,textChange}){
    return(
        <>
            <input
            className="text-black"
                type="text"
                placeholder="Enter your name"
                value={text}
                onChange={(e)=>textChange(e.target.value)}
            />
        </>
    )
}

export default Input;