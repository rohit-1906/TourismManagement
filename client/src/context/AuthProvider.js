import { createContext , useState } from "react";
import React from "react";
const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
    const [auth,seAuth] = useState({})

    return (
        <AuthContext.Provider value = {{auth,seAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext