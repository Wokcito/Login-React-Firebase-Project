import AuthContext from "./authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AuthState = ({ children }) => {
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    return (
        <AuthContext.Provider
            value={{
                // Funciones
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
