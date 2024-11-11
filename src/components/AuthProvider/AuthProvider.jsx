import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser)
      })

      return ()=>{
        unSubscribe()
      }

  }, [])

  const signOutUser = () =>{
    return signOut(auth)
  }
 

  const authInfo = {
    name: "Context",
    createUser,
    signInUser,
    user,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
