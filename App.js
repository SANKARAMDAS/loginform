import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import ForgotPassword from "./components/forgot/forgot.component";

import banner from "./assets/images/white.png";
import logo from "./assets/images/intensel-dark-logo.png";


function App() {
  return (
    <Router>
      <div className="intensel">
        <div className="banner">
          <img className="banner-img" src={banner}></img>
        </div>
        <div className="functional">
          <img className="functional-img" src={logo}></img>
          <div className="functional-form">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </div>
          <div className="functional-terms">Terms of Use. Privacy Policy</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
