//import * as request from "superagent"

export const ADD_NAME = "ADD_NAME";
export function addName(name) {
  return {
    type: ADD_NAME,
    payload: name
  };
}





