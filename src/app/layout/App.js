import { Route, Switch } from "react-router-dom";
import Login from "../features/authentication/Login";
import HomePage from "../features/home/HomePage";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CarDetailsPage from "../features/cars/CarDetailsPage";
import Layout from "./Layout";
import UserListPage from "../features/users/UserListPage";
import UserDetailsPage from "../features/users/UserDetailsPage";
import CarListPage from "../features/cars/CarListPage";
import ResetPassword from "../features/authentication/ResetPassword";
import ConfirmPassword from "../features/authentication/ConfirmPassword";
import ChangeEmail from "../features/authentication/ChangeEmail";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/change-password" component={ConfirmPassword} />
        <Route exact path="/change-email" component={ChangeEmail} />
        <Layout>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/cars"> <CarListPage /> </Route>
          <Route exact path="/cars/:id"><CarDetailsPage /></Route>
          <Route exact path="/users"> <UserListPage /> </Route>
          <Route exact path="/users/:id"><UserDetailsPage /></Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
