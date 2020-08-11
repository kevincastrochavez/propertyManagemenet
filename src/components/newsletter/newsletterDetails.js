import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewsletterBox from "./newsletterBox";
import NewsletterLatest from "./newsletterLatest";

class NewsletterDetails extends Component {
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render() {
    console.log(this.props.fetchNewsletterWithId);
    return (
      <div className="newsletter-detail">
        <NewsletterBox date={this.props.newsletterToEdit.date} />
        <NewsletterLatest {...this.props.newsletterToEdit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletter;
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetails);
