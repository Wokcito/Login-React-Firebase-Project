import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();
    const { email, password } = user;

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {error ? <p>{error}</p> : null}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="youremail@company.ltd" onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="********" onChange={handleChange} />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
