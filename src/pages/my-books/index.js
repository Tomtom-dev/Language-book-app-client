import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserBooks } from "../../store/booksDetail/action";
import { selectUserBooks } from "../../store/user/selector";
import {getBooksSelection} from "../../store/books/selector"
import {getUserInfosId} from '../../store/user/selector'
import { getBooksRespond } from "../../store/books/selector";
import {selectBooks} from "../../store/booksDetail/selector"
import "./index.css";
import { removeBooks } from "../../store/books/action";

export default function MyBooks() {
  const userBooks = useSelector(selectUserBooks);
  const bookSelected= useSelector(getBooksSelection);
  const bookSelection= useSelector(selectBooks);
  const result = useSelector(getBooksRespond);
  const dispatch = useDispatch();
  const id = useSelector(getUserInfosId);
  
  console.log('selection',bookSelection);
  

  useEffect(() => {
    dispatch(getUserBooks(id));
  }, [dispatch, id]);

  function onSubmit(event){
    event.preventDefault()
    console.log("Added", event.target.id, " TESTING ", bookSelection);

    const booksData = bookSelection.find((books) => {
      if (parseInt(event.target.id) === books.id) {
        return books;
      }
    });

    console.log("add book:",booksData);
    

    // Data for Post request
    const data = {
      name: booksData.name,
      author: booksData.authors,
      description: booksData.description,
      category: booksData.category,
      language: booksData.language,
      imageUrl: booksData.imageUrl,
      link: booksData.link,
      id: booksData.id,
      userId : id
    };
    console.log("Data", data);
    dispatch(removeBooks(data))
    
  }

  return (
    <div>
      <h2 className='heading-center'>My favourite books</h2>
      <div className='border_my_page'>
        <div className='wrapper'>
          {userBooks.map((books) => {
            // console.log("books", books.books);
            return (
              <div className='books'>
                {books.books.map((userBooks) => {
                  // console.log("BOOKS", userBooks.name);
                  return (
                    <div key={userBooks.id} className="test">
                      <p>
                        <b>{userBooks.name}</b>
                      </p>
                      <img
                        src={userBooks.imageUrl}
                        alt='books cover'
                        height='200px'
                        padding='20%'
                      />
                      <p>
                        <b>{userBooks.author}</b>
                      </p>
                      
                      <Link to={`/MyBooks/${userBooks.id}`}>
                        <button className='button_my_page'>Details</button>
                      </Link>
                      
                        <button
                        id={userBooks.id} 
                        onClick={onSubmit} 
                        className='button_delete'>Delete</button>
                      
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
