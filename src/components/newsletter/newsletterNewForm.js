import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class NewsletterNewForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="newsletter-new-form">
        <FormTitle className="newsletter-new-form__title" text="Login" />
        <Field
          className="newsletter-new-form__email"
          placeholder="Enter Email"
          component={FormInput}
          name="email"
          type="email"
          title="Email"
        />
      </form>
    );
  }
}

NewsletterNewForm = reduxForm({
  form: "newsletternew",
})(NewsletterNewForm);

export default NewsletterNewForm;
