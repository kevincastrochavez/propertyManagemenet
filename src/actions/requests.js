import { CHANGE_SELECTED_REQUEST_TYPE } from "./types";
import { ROOT_URL } from "../config";
import axios from "axios";

export function changeSelectedRequestType(boxType) {
  return {
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: boxType,
  };
}

export function createNewRequest(userId, formData, success) {
  const token = localStorage.getItem("token");
  return function () {
    axios
      .post(`${ROOT_URL}/requests/new`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        success();
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
