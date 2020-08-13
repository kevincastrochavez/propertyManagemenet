import React, { Component } from "react";
import RequestsItem from "./requestsItem";
import { connect } from "react-redux";

class Requests extends Component {
  render() {
    return (
      <div className="requests">
        {this.props.requests.map((requestIitem) => {
          return <RequestsItem {...requestIitem} key={requestIitem._id} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { requests } = state.requests;

  return {
    requests,
  };
}

export default connect(mapStateToProps)(Requests);
