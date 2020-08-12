import React, { Component } from "react";
import Button from "../button";
import RequestsBoxes from "./requestsBoxes";
import Requests from "./requests";
import { connect } from "react-redux";
import * as actions from "../../actions";

class RequestsGrid extends Component {
  handleAddRequest = () => {
    this.props.history.push("/requests/new");
  };

  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    return (
      <div className="requests-grid">
        <Button
          className="requests-grid__button"
          icon="fas fa-plus"
          callback={() => this.handleAddRequest()}
        />
        <RequestsBoxes />
        <Requests />
      </div>
    );
  }
}

export default connect(null, actions)(RequestsGrid);
