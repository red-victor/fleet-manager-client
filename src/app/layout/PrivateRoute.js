import { useContext, useEffect } from "react"
import { Redirect, Route, useHistory } from "react-router-dom";
import agent from "../api/agent";
import UserContext from "../context/user-context"

function PrivateRoute({ children, ...rest }) {
    const userCtx = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (userCtx.user === null) {
            history.push("/login");
        }
        else {
            agent.Account.currentUser()
            .then(user => {
                userCtx.saveUser(user);
            })
            .catch(() => {
                userCtx.signOutUser();
                history.push("/login");
            });
        }
    }, [userCtx, history]);
    
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