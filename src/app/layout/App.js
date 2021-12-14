import { useContext, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "../features/authentication/Login";
import HomePage from "../features/home/HomePage";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";
import UserContext from "../context/user-context";
import agent from "../api/agent";
import Register from "../features/authentication/Register";

function App() {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userCtx.user) {
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
  }, [userCtx.user.name, history]);

  return (
    <>
        <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute exact path="/register">
            <Register />
          </PrivateRoute>
          <Route exact path="/login" component={Login} />
        </Switch>
    </>
  );
}

export default App;
