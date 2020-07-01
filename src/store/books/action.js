import axios from 'axios '

export const productsFetched = (books) =>{
    return{
        type:"BOOK_FETCHED",
        payload: books,
    }
}



export const fetchProducts = (dispatch, getstate) =>{
    
}