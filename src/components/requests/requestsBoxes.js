import React, { Component } from "react";
import RequestsBox from "./requestsBox";
import { connect } from "react-redux";

class RequestsBoxes extends Component {
  render() {
    return (
      <div className="requests-boxes">
        <RequestsBox title={"Pending"} count={this.props.pendingCount} />
        <RequestsBox title={"In Progress"} count={this.props.progressCount} />
        <RequestsBox title={"Complete"} count={this.props.completeCount} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { requests } = state.requests;
  var pendingCount = 0;
  var progressCount = 0;
  var completeCount = 0;

  requests.map((request) => {
    if (request.status == "Pending") {
      pendingCount += 1;
    } else if (request.status == "In Progress") {
      progressCount += 1;
    } else if (request.status == "Complete") {
      completeCount += 1;
    }
  });

  return {
    pendingCount,
    progressCount,
    completeCount,
  };
}

export default connect(mapStateToProps)(RequestsBoxes);
