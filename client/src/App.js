import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header.component";
import Register from "./components/auth/Register.component.jsx";
import Login from "./components/auth/Login.component.jsx";
import AuthCard from "./components/auth/AuthCard.component.jsx";

const RegisterRoute = () => (
  <AuthCard>
    <Register />
  </AuthCard>
);

const Landing = () => (
  <AuthCard>
    <h1>Welcome to Ecommerce</h1>
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
        <Route exact path="/" component={Landing} />
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
