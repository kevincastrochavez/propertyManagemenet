import React, { Component } from "react";
import NewsletterNewForm from "../newsletter/newsletterNewForm";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { createNewRequest } from "./requests";

class RequestsNew extends Component {
  onSubmit = (fields) => {
    this.props.createNewRequest(this.props._id, fields, () => {
      this.props.history.push("/dashboard");
    });
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

function mapStateToProps(state) {
  const { _id } = state.auth.user;
  return { _id };
}

export default connect(mapStateToProps, actions)(RequestsNew);
