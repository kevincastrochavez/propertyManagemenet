import React, { Component } from "react";
import NewsletterNewForm from "./newsletterNewForm";

class EditNewsletter extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
    //   this.props.fetchNewsletterWithId
  }

  render() {
    return (
      <div className="newsletter-new">
        <NewsletterNewForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          title="Edit Newsletter"
        />
      </div>
    );
  }
}

export default EditNewsletter;
