import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  updateProfile,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Components/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Google Sign In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email and password sign in
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Email verification before sign in
  const userEmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // Verify email verification
  const userVerifier = () => {
    user.reload();
    return auth.currentUser.emailVerified;
  };

  // General Sign out
  const generalSignOut = () => {
    signOut(auth);
    // console.log("User is signed out");
    navigate("/");
  };

  // Email verification before sign in
  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Tracking sign in state of current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("Current User:", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Add DisplayName to user profile
  const updateDisplayName = (name) => {
    try {
      return updateProfile(auth.currentUser, { displayName: name });
    } catch (error) {
      // console.log(error);
    } finally {
      // console.log("Display name updated");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        generalSignOut,
        user,
        createUser,
        userSignIn,
        updateDisplayName,
        userEmailVerification,
        userVerifier,
        userPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
