import {
   getAuth,
   getIdToken,
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
   const [isLoading, setIsLoading] = useState(true);

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const handleLogout = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            setUser({});
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setIsLoading(false));
   };

   // observe whether user auth state changed or not
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            getIdToken(user).then((idToken) => {
               localStorage.setItem("idToken", idToken);
               console.log(idToken);
            });
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return unsubscribe;
   }, [auth]);

   return {
      user,
      signInUsingGoogle,
      isLoading,
      setIsLoading,
      handleLogout,
   };
};

export default useFirebase;
