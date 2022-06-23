import { Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

// Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Context
import AuthProvider from "./context/AuthState.jsx";

function App() {
    return (
        <div className="bg-slate-300 h-screen text-white flex">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
