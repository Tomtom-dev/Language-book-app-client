import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
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
    <div className='div_main bold'>
      <Link to="/MyBooks" className="return">return to the selection</Link>
      
      <div className="container-text">Books details</div>
      {bookDetails.map((details) => {
        console.log("BookDetails", details);
        return (
          <div className='form_book'>
            <div className='image-book_details'>
              <img
                src={details.imageUrl}
                alt='book cover'
                height='400px'
                width='300px'
              />
            </div>
            <div className="form_book_info">
              <p>
                <b className='div_left'>Title : </b>
                {details.name}
              </p>
              <p>
                <b className='div_left'>Author : </b>
                {details.author}
              </p>
              <p>
                <b className='div_left'>Language : </b>
                {details.language}
              </p>
              <p>
                <b className='div_left'>Description : </b>
                {details.description}
              </p>
              
              <a target="_blank" rel="noopener noreferrer" href={details.link} class="button-ebook">Go to the book</a>

            </div>
          </div>
        );
      })}
    </div>
  );
}
