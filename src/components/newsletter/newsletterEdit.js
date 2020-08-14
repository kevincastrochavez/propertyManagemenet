import React, { Component } from "react";
import EditNewsletterForm from "./newsletterEditForm";
import { connect } from "react-redux";
import * as actions from "../../actions";

class EditNewsletter extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render() {
    return (
      <div className="newsletter-new">
        <EditNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle="Edit Newsletter"
          fieldOneTitle="Newsletter Title"
          fieldTwoTitle="Body"
        />
      </div>
    );
  }
}

export default connect(null, actions)(EditNewsletter);
