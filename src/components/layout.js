import React, { Component } from "react";
import { Header, HeaderBar } from "./header";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <div className="layout-grid">
        <Header title="Welcome to HOA Manager!" />
        <HeaderBar subtitle="Please login to continue" />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Layout);
