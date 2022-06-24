import { Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

// Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProyectedRoute from "./components/ProyectedRoute";

// Context
import AuthProvider from "./context/AuthState.jsx";

function App() {
    return (
        <div className="bg-slate-300 h-screen text-black flex">
            <AuthProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProyectedRoute>
                                <Home />
                            </ProyectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
