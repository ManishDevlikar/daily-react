import { useContext } from "react";
import { LoggedContext } from "./LoggedContext";

export function useIsLogged(){
    return useContext(LoggedContext);
}