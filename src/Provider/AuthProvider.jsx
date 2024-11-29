import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const authData = {
        "tariqul": "tariqul",
        "jannatul": "tariqul",
    }


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;