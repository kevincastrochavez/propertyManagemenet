import React, { Component } from "react";
import SignInForm from "./signInForm";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SignIn extends Component {
  onSubmit = (fields) => {
    this.props.signIn(fields, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="sign-in">
        <SignInForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
