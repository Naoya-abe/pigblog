import { combineReducers } from "redux";

const postListReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "GET_POST_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ posts: postListReducer });
