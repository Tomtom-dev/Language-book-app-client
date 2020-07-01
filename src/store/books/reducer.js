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
