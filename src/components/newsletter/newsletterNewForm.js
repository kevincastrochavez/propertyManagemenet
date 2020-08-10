import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTitle } from "../formTitle";
import { FormInput, FormTextArea, FormButton, FormImage } from "../formFields";

class NewsletterNewForm extends Component {
  render() {
    const { handleSubmit, title } = this.props;

    return (
      <form onSubmit={handleSubmit} className="newsletter-new-form">
        <FormTitle className="newsletter-new-form__title" text={title} />
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
        <Field
          className="newsletter-new-form__submit"
          small={true}
          danger={true}
          component={FormButton}
          name="submit"
          type="submit"
          title="Submit"
        />
        <Field
          className="newsletter-new-form__cancel"
          small={true}
          component={FormButton}
          name="cancel"
          type="button"
          title="Cancel"
          onClick={this.props.onCancel}
        />
        <Field
          className="newsletter-new-form__image"
          small={true}
          component={FormImage}
          name="image"
          type="file"
          title="Image"
        />
      </form>
    );
  }
}

NewsletterNewForm = reduxForm({
  form: "newsletternew",
})(NewsletterNewForm);

export default NewsletterNewForm;
