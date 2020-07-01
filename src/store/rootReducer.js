import { combineReducers } from "redux";
import userReducer from  "./user/reducer"
import bookReducerState from "./books/reducer"
import user from "./user/reducer";
import books from "./books/reducer";

export default combineReducers({
    userReducer,
    bookReducerState,
    user,
    books,
})



