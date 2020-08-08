import React, { Component } from "react";
import NewsletterBox from "./newsletterBox";
import NewsletterArchive from "./newsletterArchive";
import NewsletterLatest from "./newsletterLatest";

class NewsletterGrid extends Component {
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
        <NewsletterBox date={new Date()} />
        <NewsletterArchive />
        <NewsletterLatest {...latest} />
      </div>
    );
  }
}
export default NewsletterGrid;
