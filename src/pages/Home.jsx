import useAuth from "../hooks/useAuth";

const Home = () => {
    const { user } = useAuth();

    return <div>Home</div>;
};

export default Home;
