import { combineReducers } from "redux";
import user from "./user/reducer";
import books from "./books/reducer";

export default combineReducers({
  user,
  books,
});
