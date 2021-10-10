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
      signInWithPopup(auth, googleProvider).then((result) => {
         console.log(result.user);
      });
   };

   const handleLogout = () => {
      signOut(auth).then(() => {
         setUser({});
      });
   };

   // observe whether user auth state changed or not
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         }
      });
   }, [auth]);

   return {
      user,
      signInUsingGoogle,
      handleLogout,
   };
};

export default useFirebase;
