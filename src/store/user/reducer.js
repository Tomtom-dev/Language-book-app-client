const initialState = {
<<<<<<< HEAD
    token: localStorage.getItem("token"),
    name: null,
    email: null
  };

  export default function userReducer(state = initialState,action) {
    switch(action.type){
      case "LOGIN_SUCCESS":
          localStorage.setItem("token", action.payload.token);

          return {...state, ...action.payload};
          
      case "LOG_OUT":
          localStorage.removeItem("token");
          return {...initialState, token:null};

      case "TOKEN_STILL_VALID":
          return { ...state, ...action.payload };
            
      default: return state;

    }
    
}
=======
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
>>>>>>> development
