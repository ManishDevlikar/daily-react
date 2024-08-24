import { useId } from "react"

export function UseIdEx(){

    const id=useId();  // generates unique string if we create multiple useId then each one will get unique string
    return(<>
        <form>
            <label htmlFor={id+"username"}>username</label>
            <input id={id+"username"} type="text" placeholder="username"/>
            <label htmlFor={id+"password"}>password</label>
            <input id={id+"password"} type="password"></input>
            <label htmlFor={id+"email"}>email</label>
            <input id={id+"email"} type="email"></input>
        </form>
    </>)
}