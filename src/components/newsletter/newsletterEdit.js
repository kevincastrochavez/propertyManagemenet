import React, { Component } from "react";
import NewsletterNewForm from "./newsletterNewForm";
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
        <NewsletterNewForm
          newsletterToEdit={this.props.newsletterToEdit}
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle="Edit Newsletter"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletter;
  return {
    newsletterToEdit,
  };
}

export default connect(mapStateToProps, actions)(EditNewsletter);
