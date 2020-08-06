import React, { Component } from "react";
import SignUpForm from "./signUpForm";

class SignUp extends Component {
  render() {

    onSubmit = (fields) {

    }
    
    return (
      <div className="sign-up">
        <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default SignUp;
