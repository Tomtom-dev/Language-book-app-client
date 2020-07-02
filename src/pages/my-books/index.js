import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserBooks } from "../../store/booksDetail/action";
import { selectUserBooks } from "../../store/user/selector";
import "./index.css";

export default function MyBooks() {
  const userBooks = useSelector(selectUserBooks);
  console.log("userBooks", userBooks);
  const dispatch = useDispatch();
  const id = 3;

  useEffect(() => {
    dispatch(getUserBooks(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2 className='heading-center'>My favourite books</h2>
      <div className='border_my_page'>
        <div className='wrapper'>
          {userBooks.map((books) => {
            console.log("books", books.books);
            return (
              <div className='books'>
                {books.books.map((userBooks) => {
                  console.log("BOOKS", userBooks.name);
                  return (
                    <div key={userBooks.id}>
                      <p>
                        <b>{userBooks.name}</b>
                      </p>

                      <img
                        src={userBooks.imageUrl}
                        alt='books cover'
                        height='200px'
                        paddin='20%'
                      />
                      <p>
                        <b>{userBooks.author}</b>
                      </p>
                      <Link to={`/MyBooks/${userBooks.id}`}>
                        <button className='button_my_page'>Details</button>
                      </Link>
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
