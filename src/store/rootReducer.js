import { combineReducers } from "redux";
import userReducer from  "./user/reducer"
import bookReducerState from "./books/reducer"

export default combineReducers({
    userReducer,
    bookReducerState
})