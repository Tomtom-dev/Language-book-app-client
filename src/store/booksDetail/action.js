import axios from "axios";

export const bookSelectedByUser = (books) =>{
  return{
    type:"BOOKS_SELECTION_USERS",
    payload: books,
  }
}

export const getUserBooks = (id) => {
    return async (dispatch, getState) => {
      dispatch({ type: "USER_BOOKS_LOADING" });
      try {
        const response = await axios.get(`https://language-book-app.herokuapp.com/user/${id}`);
  
        dispatch({ type: "USER_BOOKS_LOADED", payload: response.data });
        dispatch(bookSelectedByUser(response.data.books))
      } catch (error) {
        dispatch({ type: "USER_BOOKS_ERROR" });
      }
    };
  };

export const getBookDetails = (id) => {
return async (dispatch, getState) => {
    dispatch({ type: "BOOK_DETAILS_LOADING" });
    try {
    const response = await axios.get(`https://language-book-app.herokuapp.com/books/${id}`);

    dispatch({ type: "BOOKS_DETAILS_LOADED", payload: response.data });
    } catch (error) {
    dispatch({ type: "BOOKS_DETAILS_ERROR" });
    }
};
};





