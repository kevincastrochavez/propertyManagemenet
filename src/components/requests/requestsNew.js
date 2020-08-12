import React, { Component } from "react";
import NewsletterNewForm from "../newsletter/newsletterNewForm";

class RequestsNew extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="requests-new">
        <NewsletterNewForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle="New Request"
          fieldOnePlaceholder="Service Request Title Here"
          fieldOneTitle="Service Request Title"
          fieldTwoPlaceholder="Description Here"
          fieldTwoTitle="Description"
        />
      </div>
    );
  }
}

export default RequestsNew;
