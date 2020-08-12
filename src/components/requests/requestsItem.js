import React, { Component } from "react";
import Icon from "../icon";
import Button from "../button";
import AnimateHeight from "react-animate-height";

class RequestsItem extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
    };
  }

  toggleDropdown = () => {
    var element = document.getElementById("requests-item");

    if (this.state.height == 0) {
      element.classList.add("bg-F8");
      this.setState({ height: "auto" });
    } else {
      element.classList.remove("bg-F8");
      this.setState({ height: 0 });
    }
  };

  render() {
    return (
      <div id="requests-item" className="requests-item">
        <Icon
          className="requests-item__icon"
          icon="fas fa-exclamation-triangle"
        />

        <div className="requests-item__title">
          <div className="requests-item__title__text">Broken bathroom</div>

          <Icon
            callback={() => this.toggleDropdown()}
            className="requests-item__title__arrow"
            icon="fas fa-sort-down"
          />
        </div>

        <div className="requests-item__tenant-unit">Kevin - Unit 204</div>

        <div className="requests-item__date">23/03/1997</div>

        <Button
          className="requests-item__move"
          icon="fas fa-wrench"
          callback={() => console.log("try to move")}
        />

        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="requests-item__description">
              <img
                className="requests-item__description-img"
                src="http://via.placeholder.com/160x94"
              />

              <p className="requests-item__description-text">
                Lorem Ipsum ajaksb nauhdfiune skjhndfvushbkrn sudvhinuskhnc
                sunvisuius usiufopw woiuh io fwiljfoiwh fjiw nsfi hslid fowheifh
                wilsejfo8w oij owin 8oli 8y ih
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default RequestsItem;
