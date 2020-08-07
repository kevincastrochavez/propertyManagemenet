import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import SignUpForm from "./signUpForm";

class Signup extends Component {
  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      console.log("navigate to dashboard");
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="sign-up">
        <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
