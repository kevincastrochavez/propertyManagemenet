import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput } from "../formFields";

class SignInForm extends Component {
  render() {
    return (
      <form className="sign-in-form">
        <FormTitle className="sign-in-form__title" text="Login" />
        <Field
          className="sign-in-form__email"
          placeholder="Enter Email"
          component={FormInput}
          name="email"
          type="email"
          title="Email"
        />
        <Field
          className="sign-in-form__password"
          placeholder="Enter Password"
          component={FormInput}
          name="password"
          type="password"
          title="Password"
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "signin",
})(SignInForm);

export default SignInForm;
