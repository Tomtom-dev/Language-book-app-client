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