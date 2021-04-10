import React, { useState,useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addBooks } from "../../store/books/action";
import { getBooksRespond } from "../../store/books/selector";
import { addToSelection } from "../../store/bookSelection/action";
import { getUserInfosId } from "../../store/user/selector";
import { store } from 'react-notifications-component';

import "./index.css";

export default function FindABookList() {
  const [language, setLanguage] = useState("");
  const [word, setWord] = useState("");
  // const [bookId, setBookId] = useState();

  const dispatch = useDispatch();
  const result = useSelector(getBooksRespond);
  const idUser = useSelector(getUserInfosId);

  useEffect(() => {
    const interval = setInterval(() => {
      
    }, 500);
    return () => clearInterval(interval)
  },[]);

  // notification message for add a book
  function messageBookAdded (){
      store.addNotification({
        type:"success",
        title: "Book added!",
        message: "the book is added successfully to your collection ",
        container:"top-center",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss:{
            duration: 5000,
            showIcon: true
        },
        width:800
      })
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch(fetchProducts({ language, word }));
  }

  function addBook(event) {
    event.preventDefault();
    const booksData = result.find(book => 
      book.id === event.target.id     
    );

    // Data for Post request
    const data = {
      name: booksData.volumeInfo.title,
      author: booksData.volumeInfo.authors.join(","),
      description: booksData.volumeInfo.description,
      category: booksData.volumeInfo.categories.join(","),
      language: booksData.volumeInfo.language,
      imageUrl: booksData.volumeInfo.imageLinks.thumbnail,
      link: booksData.accessInfo.webReaderLink,
      userId: idUser,
    };
    dispatch(addBooks(data));
    dispatch(addToSelection(data));
    messageBookAdded()
  }

  return (
    <div >
      <h2 className="container-text" style={{textAlign:"center"}}>Find a book</h2>
      <form className="wrap">

      <div className="search">

          <input
          type='text'
          className="searchTerm"
          placeholder='search'
          onChange={(event) => setWord(event.target.value)}
          value={word}
          required
          ></input>

          <select
          className='input-select-size'
          type='select'
          className="searchTerm"
          placeholder='search'
          onChange={(event) => setLanguage(event.target.value)}
          value={language}
          required
          >
            <option defaultValue='en'>Select a language</option>
            <option value="en">English</option>
            <option value="nl">Dutch</option>
            <option value="fr">French</option>
          </select>

        <button 
        onClick={onSubmit}
        className="searchButton"
        >
          <img
          alt="search_logo"
          src={require('./s2.png')}
          ></img>
        </button>
      </div>
      </form>

      
      <div>
        <div className="form_results">
          {result.map((book) => {
            return (
              <div key={book.id} className="form_result">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
                <div className="description">
                  <p>{book.volumeInfo.title}</p>
                  <p>{book.volumeInfo.authors}</p>
                  {idUser ?
                    <div className='div-button_find_book'>
                    <button
                      id={book.id}
                      onClick={addBook}
                      className='button-ebook'>
                      Add
                    </button>
                  </div> :
                  <Link to={`/login`}>
                    <button 
                    className="button-ebook"
                    >Login to see
                    </button>
                    </Link>
                  }
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
