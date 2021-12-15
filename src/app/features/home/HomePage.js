import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user-context";
import Layout from "../../layout/Layout"

const HomePage = () => {

    const userCtx = useContext(UserContext);
    const history = useHistory();

    const handleLogout = () => {
        userCtx.signOutUser();
        history.push("/login");
    }
 

    return (
        <Layout>
            <h1>Home page</h1>
            <button onClick={handleLogout}>Logout</button>
        </Layout>
    )
}

export default HomePage;