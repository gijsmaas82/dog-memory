import { ADD_NAME } from "../actions/addName";

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case ADD_NAME:
      return state = action.payload;
    default:
      return state;
  }
};

export default reducer