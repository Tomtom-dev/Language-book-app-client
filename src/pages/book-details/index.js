import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  }, [getBookDetails, id]);
  console.log("ID", id);

  return (
    <div className='div_main'>
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
                <b className='div_left'>Authour</b>
                {details.author}
              </p>
              <p>
                <b className='div_left'>Description</b>
                {details.description}
              </p>
              <button>Read this book</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
