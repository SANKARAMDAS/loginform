import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import "./login.css";

function validate(userName, password, companyCode) {
  return {
    userName: userName.length === 0,
    password: password.length === 0,
    companyCode: companyCode.length === 0,
  };
}

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      companyCode: "",
    };
  }

  handleClick(event) {
    console.log(event);
    if (event == "signup") {
      this.props.history.push("/sign-up");
    } else if (event == "forgotPassword") {
      this.props.history.push("/forgot-password");
    } else {
      alert("Login Successful");
    }
  }

  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { userName, password, companyCode } = this.state;
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.userName,
      this.state.password,
      this.state.companyCode
    );
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }

  handleUserNameChange = (evt) => {
    this.setState({ userName: evt.target.value });
  };
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  };
  handleCompanyCodeChange = (evt) => {
    this.setState({ companyCode: evt.target.value });
  };

  render() {
    const errors = validate(
      this.state.userName,
      this.state.password,
      this.state.companyCode
    );
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return (
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <div className="login-form-username">
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                value={this.state.userName}
                onChange={this.handleUserNameChange}
              />
            </div>
            <div className="login-form-password">
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="login-form-companycode">
              <TextField
                hintText="Enter Company Code"
                floatingLabelText="Company Code"
                value={this.state.companyCode}
                onChange={this.handleCompanyCodeChange}
              />
            </div>

            <div className="login-form-choices">
              <div className="login-form-choices-remember">
                <Checkbox color="primary" label="Remember Me" />
              </div>
              <div className="login-form-choices-forgot">
                <a className="login-form-choices-forgot" onClick={(event) => this.handleClick("forgotPassword")}>
                  Forgot Password
                </a>
              </div>
            </div>
            <div className="login-form-buttons">
              <div className="login-form-button-login">
                <RaisedButton
                  label="Login"
                  primary={true}
                  class="raised-button"
                  disabled={isDisabled}
                  onClick={(event) => this.handleClick("login")}
                />
              </div>
              <div className="login-form-button-signup">
                <RaisedButton
                  label="Sign Up"
                  primary={false}
                  class="raised-button"
                  onClick={(event) => this.handleClick("signup")}
                />
              </div>
            </div>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
