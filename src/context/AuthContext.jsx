import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // signOut(auth);

  return (
    <UserContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
