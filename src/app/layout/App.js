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

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <Switch>
        <Route exact path="/login" component={Login} />
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
