import React, { Component } from "react";
import Icon from "../icon";
import Button from "../button";

class RequestsItem extends Component {
  render() {
    return (
      <div className="requests-item">
        <Icon
          className="requests-item__icon"
          icon="fas fa-exclamation-triangle"
        />

        <div className="requests-item__title">
          <div className="requests-item__title__text">Broken bathroom</div>

          <Icon
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
      </div>
    );
  }
}

export default RequestsItem;
