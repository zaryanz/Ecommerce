import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header.component";
import Register from "./components/auth/Register.component.jsx";
import Login from "./components/auth/Login.component.jsx";
import AuthCard from "./components/auth/AuthCard.component.jsx";
import Homepage from "./components/layout/Homepage.component";

const RegisterRoute = () => (
  <AuthCard>
    <Register />
  </AuthCard>
);

const LoginRoute = () => (
  <AuthCard>
    <Login />
  </AuthCard>
);

const CartRoute = () => (
  <AuthCard>
    <h1>Cart</h1>
  </AuthCard>
);

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Switch>
          <Route exact path="/Register" component={RegisterRoute} />
          <Route exact path="/Login" component={LoginRoute} />
          <Route exact path="/Cart" component={CartRoute} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
