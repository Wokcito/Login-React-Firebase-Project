import AuthContext from "./authContext";

const AuthState = ({ children }) => {
    const user = {
        login: true,
    };

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthState;
