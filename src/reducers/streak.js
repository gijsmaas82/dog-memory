import { ADD_STREAK } from "../actions/addStreak";

const reducer = (state = 0, action = {}) => {
  switch (action.type) {
    case ADD_STREAK:
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer