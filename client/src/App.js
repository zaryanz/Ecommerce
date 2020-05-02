import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/Header.component";
import Register from "./components/auth/Register.component.jsx";
import AuthCard from "./components/auth/AuthCard.component.jsx";

const RegisterRoute = () => (
  <AuthCard>
    <Register />
  </AuthCard>
);
const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route exact path="/Register" component={RegisterRoute} />
      </Router>
    </Fragment>
  );
};

export default App;
