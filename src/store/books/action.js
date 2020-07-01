import axios from 'axios'

export const productsFetched = (books) =>{
    return{
        type:"BOOK_FETCHED",
        payload: books,
    }
}

const apiKey=process.env.REACT_APP_GOOGLE_MAPS_API_KEY

export const fetchProducts = (newList) => async (dispatch, getState) =>{
    try{
        const {language,word}= newList
        const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${word}&filter=ebooks&langRestrict=${language}&orderBy=relevance&key=${apiKey}&maxResults=40`)
        console.log(language);
        console.log(word); 
        console.log('data in thunk action', response.data.items);
        dispatch(productsFetched(response.data.items))
        
    }catch(error){
        console.log(error);
        
    }
}


