import axios from "axios";

export const productsFetched = (books) => {
  return {
    type: "BOOK_FETCHED",
    payload: books,
  };
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const fetchProducts = (newList) => async (dispatch, getState) => {
  try {
    const { language, word } = newList;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${word}&filter=ebooks&langRestrict=${language}&orderBy=relevance&key=${apiKey}&maxResults=20`
    );
    dispatch(productsFetched(response.data.items));
  } catch (error) {
    console.log(error);
  }
};

export function addBooks(data) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post("http://localhost:5000/books", data);

      dispatch({ type: "ADD_BOOKS", payload: response.data });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log("The error is ", error.message);
      }
    }
  };
}
