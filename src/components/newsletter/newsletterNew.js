import React, { Component } from "react";
import NewsletterNewForm from "./newsletterNewForm";

class NewsletterNew extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="newsletter-new">
        <NewsletterNewForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
        />
      </div>
    );
  }
}

export default NewsletterNew;
