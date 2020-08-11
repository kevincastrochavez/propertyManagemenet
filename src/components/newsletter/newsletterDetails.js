import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NewsletterDetails extends Component {
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render() {
    console.log(this.props.fetchNewsletterWithId);
    return <div className="newsletter-detail">Newsletter Detail</div>;
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletter;
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetails);
