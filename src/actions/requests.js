import { CHANGE_SELECTED_REQUEST_TYPE } from "./types";
import { ROOT_URL } from "../config";
import axios from "axios";

export function changeSelectedRequestType(boxType) {
  return {
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: boxType,
  };
}

export function createNewRequest(userId, fields, success) {
  console.log("token:", localStorage.getItem("token"));
  console.log("userID:", userId);
  console.log("fields:", fields);
  // return function () {
  //   axios
  //     .post(`${ROOT_URL}/requests/new`, newRequest)
  //     .then((response) => {
  //       console.log(response.data);
  //       success();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
}
