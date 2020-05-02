import React from "react";
import Header from "./components/layout/Header.component";
import Register from "./components/auth/Register.component.jsx";
import AuthCard from "./components/auth/AuthCard.component.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <AuthCard>
        <Register />
      </AuthCard>
    </div>
  );
};

export default App;
