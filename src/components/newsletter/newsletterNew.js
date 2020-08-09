import React, { Component } from "react";
import NewsletterNewForm from "./newsletterNewForm";

class NewsletterNew extends Component {
  onSubmit = (fields) => {
    console.log("try to submit");
  };

  onCancel = () => {
    console.log("cancel");
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
