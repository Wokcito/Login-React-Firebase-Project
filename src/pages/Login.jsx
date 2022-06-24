import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../components/Alert";
import { async } from "@firebase/util";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState();

    const { login, loginWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate();
    const { email, password } = user;

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if (!email) return setError("Please enter your email");

        try {
            console.log(email);
            await resetPassword(email);
            setError("We sent you an email with a link to reset your password, check your Spam Emails");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full max-w-xs m-auto">
            {error ? <Alert message={error} /> : null}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="youremail@company.ltd"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>

                    <a
                        href="#!"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={handleResetPassword}
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>

            <p className="my-4 text-sm flex justify-between">
                Don't have an Account? <Link to="/register">Register</Link>
            </p>

            <button
                onClick={handleGoogleLogin}
                className="bg-slate-500 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
            >
                Google Login
            </button>
        </div>
    );
};

export default Login;
