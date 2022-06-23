import { useContext } from "react";
import AuthContext from "../context/authContext";

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("there is no provider");

    return context;
};

export default useAuth;
