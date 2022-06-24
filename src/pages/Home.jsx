import useAuth from "../hooks/useAuth";

const Home = () => {
    const { loading, user, logout } = useAuth();

    const hangleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <h1>Loading</h1>;

    return (
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 pb-8">
                <h1 className="text-xl mb-4">Welcome {user.displayName || user.email}</h1>
                <button onClick={hangleLogout} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Home;
