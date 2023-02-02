import { createContext } from "react";

import useAuht from "../hooks/useAuth";

const Context = createContext()

function UserProvider({children}){
    const {authenticated,resgister,logout,login,user} = useAuht()
    
    return(
        <Context.Provider value={{authenticated,resgister,logout,login,user}}>
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}