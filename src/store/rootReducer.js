import { combineReducers } from "redux";
import userReducer from  "./user/reducer"
import bookReducerState from "./books/reducer"
import user from "./booksDetail/reducer";
import books from "./booksDetail/reducer";
import selectedBooksReducer from "./bookSelection/reducer"

export default combineReducers({
    userReducer,
    bookReducerState,
    user,
    books,
    selection : selectedBooksReducer,
})



