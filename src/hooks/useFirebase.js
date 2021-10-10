import {
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
   const [user, setUser] = useState({});

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const handleLogout = () => {
      signOut(auth).then(() => {
         setUser({});
      });
   };

   // observe whether user auth state changed or not
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         }
      });
      return unsubscribe;
   }, [auth]);

   return {
      user,
      signInUsingGoogle,
      handleLogout,
   };
};

export default useFirebase;
