import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../../store/booksDetail/action";

import { selectBookDetails } from "../../store/booksDetail/selector";
import "./index.css";

export default function BookDetails() {
  const { id } = useParams();
  const bookDetails = useSelector(selectBookDetails);
  
  console.log("Selectors", bookDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [dispatch, id]);

  return (
    <div className='div_main'>
      Book Details
      {bookDetails.map((details) => {
        console.log("BookDetails", details);
        return (
          <div className='div_book_detais'>
            <div className='image-book_details'>
              <img
                src={details.imageUrl}
                alt='book cover'
                height='400px'
                width='300px'
              />
            </div>
            <div>
              <p>
                <b className='div_left'>Title</b>
                {details.name}
              </p>
              <p>
                <b className='div_left'>Author</b>
                {details.author}
              </p>
              <p>
                <b className='div_left'>Language</b>
                {details.language}
              </p>
              <p>
                <b className='div_left'>Description</b>
                {details.description}
              </p>
              
              <form action={details.link}>
                  <input type="submit" value="Read this Book" />
              </form>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
