import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        name: 'Context',
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;