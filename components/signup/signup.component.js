import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import "./signup.css";

function validate(
  firstName,
  lastName,
  userName,
  email,
  password,
  repeatPassword,
  checked
) {
  return {
    firstName: firstName.length === 0,
    lastName: lastName.length === 0,
    userName: userName.length === 0,
    email: email.length === 0,
    password: password.length === 0,
    repeatPassword: password !== repeatPassword,
    checked: !checked,
  };
}

export default class SignUp extends Component {
  checked = true;
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
      error: "",
      checked: false,
    };
  }

  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { userName, password } = this.state;
    alert(`Signed up with email: ${userName} password: ${password}`);
    this.props.history.push("/sign-in");
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.firstName,
      this.state.lastName,
      this.state.userName,
      this.state.email,
      this.state.password,
      this.state.repeatPassword,
      this.state.checked
    );
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }

  handleClick(event) {
    console.log(event);
    if (event == "signin") {
      this.props.history.push("/sign-in");
    }
  }
  handleFirstNameChange = (evt) => {
    this.setState({ firstName: evt.target.value });
  };
  handleLastNameChange = (evt) => {
    this.setState({ lastName: evt.target.value });
  };
  handleUserNameChange = (evt) => {
    this.setState({ userName: evt.target.value });
  };
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  };
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  };
  handleRepeatPasswordChange = (evt) => {
    this.setState({ repeatPassword: evt.target.value });
    if (evt.target.value !== "" && evt.target.value !== this.state.password) {
      this.state.error = "Passwords don't match";
    } else {
      this.state.error = "";
    }
  };

  handleCheckBox = (evt) => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const errors = validate(
      this.state.firstName,
      this.state.lastName,
      this.state.userName,
      this.state.email,
      this.state.password,
      this.state.repeatPassword,
      this.state.checked
    );
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return (
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <div className="signup-form-name">
              <div className="signup-form-firstname">
                <TextField
                  hintText="First Name"
                  floatingLabelText="First Name"
                  fullWidth="40%"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className="signup-form-lastname">
                <TextField
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  fullWidth="40%"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                />
              </div>
            </div>
            <div>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                value={this.state.userName}
                onChange={this.handleUserNameChange}
              />
            </div>
            <div>
              <TextField
                type="email"
                hintText="Enter your Email"
                floatingLabelText="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div>
              <TextField
                type="password"
                hintText="Confirm Password"
                floatingLabelText="Confirm Password"
                value={this.state.repeatPassword}
                onChange={this.handleRepeatPasswordChange}
                errorText={this.state.error}
              />
            </div>

            <div className="signup-form-terms">
              <div className="signup-form-terms-condition">
                <Checkbox
                  color="primary"
                  label="I agree with terms and conditions"
                  value={this.state.checked}
                  onClick={this.handleCheckBox}
                />
              </div>
            </div>
            <div className="signup-form-button">
              <div className="signup-form-button-signup">
                <RaisedButton
                  label="Sign Up"
                  primary={false}
                  class="raised-button"
                  disabled={isDisabled}
                  onClick={(event) => this.handleSubmit(event)}
                />
              </div>
            </div>
            <div className="signup-form-signin">
              <a
                className="signup-form-signin-anchor"
                onClick={(event) => this.handleClick("signin")}
              >
                Already have an account? Sign In.
              </a>
            </div>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
