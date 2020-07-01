import axios from "axios";

export const getBookDetails = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "BOOK_DETAILS_LOADING" });
    try {
      const response = await axios.get(`http://localhost:5000/books/${id}`);

      dispatch({ type: "BOOKS_DETAILS_LOADED", payload: response.data });
    } catch (error) {
      dispatch({ type: "BOOKS_DETAILS_ERROR" });
    }
  };
};
