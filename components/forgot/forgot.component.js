import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./forgot.css";

export default class ForgotPassword extends Component {
  checked = true;
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  handleSubmit = (evt) => {
    const errors = this.state.email.length === 0;
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    if (isDisabled) {
      evt.preventDefault();
      return;
    }
    const { email } = this.state;
    alert(`Signed up with email: ${email} `);
    this.props.history.push("/sign-in");
  };

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  };

  render() {
    const isDisabled = this.state.email.length === 0 ? true : false;
    return (
      <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <div className="forgot-form">
            <div className="forgot-form-name">
              <div className="forgot-form-email">
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                  fullWidth="40%"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
            </div>
            <div className="forgot-form-button">
              <div className="forgot-form-button-signin">
                <RaisedButton
                  label="Send Button"
                  primary={true}
                  class="raised-button"
                  disabled={isDisabled}
                  onClick={(event) => this.handleSubmit(event)}
                />
              </div>
            </div>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
