import React, { createContext, useState } from 'react'
//passing the value in Logincontext
export const LoginContext = createContext(null);

function ContextProvider({children}) {

    const [account, setAccount] = useState("");

    return (
        <>
            <LoginContext.Provider value={{ account, setAccount }}>
                {children}
            </LoginContext.Provider>
        </>
    )
}

export default ContextProvider;





