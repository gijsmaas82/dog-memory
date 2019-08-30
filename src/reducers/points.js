import { ADD_POINTS } from "../actions/addPoints";

const reducer = (state = 0, action = {}) => {
  switch (action.type) {
    case ADD_POINTS:
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer