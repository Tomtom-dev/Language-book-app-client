import axios from 'axios'

const BOOK_DELETE_REQUEST="BOOK_DELETE_REQUEST"
const BOOK_DELETE_SUCCESS="BOOK_DELETE_SUCCESS"
const BOOK_DELETE_FAIL="BOOK_DELETE_FAIL"


export const addToSelection = (book)=>{
    return {
        type:"ADD_TO_SELECTION",
        payload:book
    }
}

export const deleteFromSelection = (book) => async (dispatch, getState) => {
    try {
      console.log("book ??", book.id);
      dispatch({ type: BOOK_DELETE_REQUEST, payload: book });
      const userId = getState().userReducer.id;
      const booksId = book.id;
      console.log("BOOKSID" + booksId);
      const { data } = await axios.delete(
        `https://language-book-app.herokuapp.com/users/${userId}/books/${booksId}`,
        {
          book,
        }
      );
      dispatch({ type: BOOK_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: BOOK_DELETE_FAIL, payload: error.message });
    }
  };