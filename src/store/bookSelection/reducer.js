const initialState = [];

export default function selectedBooksReducer (state=initialState,action) {
    switch(action.type){
        case "ADD_TO_SELECTION":
        return [...state, action.payload]
        default:
            return state;
    }
}