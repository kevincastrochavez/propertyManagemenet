import React, { Component } from "react";
import * as actions from "../../actions";
import NewsletterBox from "./newsletterBox";
import NewsletterArchive from "./newsletterArchive";
import NewsletterLatest from "./newsletterLatest";
import Button from "../button";
import { connect } from "react-redux";

class NewsletterGrid extends Component {
  handleAddNewsletter = () => {
    this.props.history.push("/newsletter/new");
  };

  componentDidMount() {
    this.props.fetchNewsletters();
  }

  render() {
    const latest = {
      _id: "51861841",
      title: "Happy Holidays",
      body:
        "is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem is simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Loremis simply dummy text of the printing and typesetting industry. Loris simply dummy text of the printing and typesetting industry. Lorem",
      date: new Date(),
      imageUrl: "http://via.placeholder.com/700x258",
    };

    return (
      <div className="newsletter-grid">
        <Button
          className="newsletter-grid__button"
          icon="fas fa-plus"
          callback={() => this.handleAddNewsletter()}
        />
        <NewsletterBox date={new Date()} />
        <NewsletterArchive />
        <NewsletterLatest history={this.props.history} {...latest} />
      </div>
    );
  }
}
export default connect(null, actions)(NewsletterGrid);
