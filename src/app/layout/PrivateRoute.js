import { useContext, useEffect } from "react"
import { Redirect, Route } from "react-router-dom";
import UserContext from "../context/user-context"

function PrivateRoute({ children, ...rest }) {
    const userCtx = useContext(UserContext);
    useEffect(() => {
        console.log(userCtx.user);
    }, [])
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userCtx.user ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
}

export default PrivateRoute;