import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import SignUpForm from "./signUpForm";

class SignUp extends Component {
  render() {
    onSubmit = (fields) => {
      this.props.signUp(fields, () => {
        console.log("navigate to dashboard");
        this.props.history.push("/dashboard");
      });
    };

    return (
      <div className="sign-up">
        <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
