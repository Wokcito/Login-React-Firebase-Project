import AuthContext from "./authContext";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const AuthState = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                // Estados
                user,
                loading,
                // Funciones
                signup,
                login,
                logout,
                loginWithGoogle,
                resetPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
