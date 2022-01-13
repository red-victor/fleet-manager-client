import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user-context";
import UserDetails from "./UserDetails";
import Layout from "../../layout/Layout"

const HomePage = () => {

    return (
        <UserDetails />
    )
}

export default HomePage;