import React, { Component } from "react";
import SignInForm from "../auth/signInForm";

class NewsletterNew extends Component {
  onSubmit = (fields) => {
    console.log("try to submit");
  };

  render() {
    return (
      <div className="newsletter-new">
        <SignInForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default NewsletterNew;
