import React, { Component } from "react";

class RequestsBoxes extends Component {
  render() {
    return (
      <div className="requests-boxes">
        <div>Pending</div>
        <div>Progress</div>
        <div>Complete</div>
      </div>
    );
  }
}

export default RequestsBoxes;
