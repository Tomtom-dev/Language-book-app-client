const initialState = [];

const BOOK_DELETE_REQUEST="BOOK_DELETE_REQUEST"
const BOOK_DELETE_SUCCESS="BOOK_DELETE_SUCCESS"
const BOOK_DELETE_FAIL="BOOK_DELETE_FAIL"

export default function selectedBooksReducer (state=initialState,action) {
    switch(action.type){
        case "ADD_TO_SELECTION":
        return [...state, action.payload]
        case BOOK_DELETE_REQUEST:
            return {loading: true};
        case BOOK_DELETE_SUCCESS:
            return {loading:false, state: state}
        case BOOK_DELETE_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}


