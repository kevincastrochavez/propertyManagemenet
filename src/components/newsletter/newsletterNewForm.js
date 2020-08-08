import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput, FormTextArea } from "../formFields";

class NewsletterNewForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="newsletter-new-form">
        <FormTitle
          className="newsletter-new-form__title"
          text="New Newsletter"
        />
        <Field
          className="newsletter-new-form__newsletter-title"
          placeholder="Newsletter Title"
          component={FormInput}
          name="title"
          type="text"
          title="Newsletter Title"
        />
        <Field
          className="newsletter-new-form__body"
          placeholder="Newsletter Body"
          component={FormTextArea}
          name="body"
          type="text"
          title="Body"
        />
      </form>
    );
  }
}

NewsletterNewForm = reduxForm({
  form: "newsletternew",
})(NewsletterNewForm);

export default NewsletterNewForm;
