const initialState= { list :[]}

export default function bookReducerState (state= initialState, action){
    switch(action.type){
        case "BOOK_FETCHED":
            return {
                ...state, list :[...action.payload]
            }
        default:
            return state;
    }
        
}
const initialState = {
  loading: true,
  details: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_DETAILS_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "BOOKS_DETAILS_LOADED": {
      return {
        ...state,
        loading: false,
        details: [action.payload],
      };
    }
    case "BOOKS_DETAILS_ERROR": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
