// import { useEffect, useState } from "react";
// import {
//   getAuth,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
// } from "firebase/auth";
// import initializeAuthentication from "../Pages/Firebase/firebase.init";
// initializeAuthentication();
// const useFirebase = () => {
//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState({})
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   // google sign in function 
//   const googleSignIn = () => {
//     return signInWithPopup(auth, googleProvider)
//   }
//   // onstate change set user 
//   useEffect(() => {
//     setIsLoading(true);
//     const unSubscribe = onAuthStateChanged(auth, user => {
//       if (user) {
//         setUser(user)
//         setIsLoading(false)
//       }
//       else {
//         setUser({})
//         setIsLoading(false)
//       }
//     })
//     return () => unSubscribe;
//   }, []);
//   // logout function
//   const logOutUser = () => {
//     signOut(auth).then(() => setUser({}))
//   }
//   return {
//     user,
//     error,
//     setUser,
//     setError,
//     googleSignIn,
//     logOutUser,
//     isLoading,
//     setIsLoading
//   };
// }
// export default useFirebase;