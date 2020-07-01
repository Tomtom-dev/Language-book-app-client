const initialState = {
  loading: true,
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_BOOKS_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "USER_BOOKS_LOADED": {
      return {
        ...state,
        loading: false,
        books: [action.payload],
      };
    }
    case "USER_BOOKS_ERROR": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
