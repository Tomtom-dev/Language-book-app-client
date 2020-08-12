import axios from "axios";

export const productsFetched = (books) => {
  return {
    type: "BOOK_FETCHED",
    payload: books,
  };
};

export const showSelectedBooks = (allBooks) =>({
  type:"SELECTED_BOOKS",
  payload: allBooks
})

export const removeBookFromSelection = (book)=>({
  type:"REMOVE_BOOKS",
  payload: book
})

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
  return async (dispatch) => {
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

// delete selected book
export function removeBooks(data) {
  return async (dispatch, getState) => {
    try {
      const userId = getState().userReducer.id
      const response = await axios.delete(`http://localhost:5000/bookselection/${userId}`, data);
      
      // dispatch(removeBookFromSelection(response.data));
      dispatch({ type: "REMOVE_BOOKS", payload: response.data });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log("The error is ", error.message);
      }
    }
  };
}

//get books corrresponding to the userId
export const getbookSelected = () => async (dispatch, getState) =>{
  try{
   const userId = getState().userReducer.id
   console.log('IDDDDDDDDDD', userId);

   const response = await axios.get(`http://localhost:5000/bookselection/${userId}`)
   console.log("RESPONSE", response);
   
   dispatch(showSelectedBooks(response.data))
  }catch(error){
    console.log(error);
    
  }
}