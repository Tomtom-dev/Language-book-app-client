const initialState = {
  list: [],
  selectedBooks:[],
  bookToDelete:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_FETCHED":
      return {
        ...state,
        list: [...action.payload],
      };
    
    case "SELECTED_BOOKS":{
      return {
        ...state,
        selectedBooks :[...action.payload]}
    }
    case "REMOVE_BOOKS":
      return {
        ...state,
        bookToDelete :[...action.payload]
      }
      
    default:
      return state;
  }
};
