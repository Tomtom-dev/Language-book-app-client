import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../../store/books/action";
import { selectBookDetails } from "../../store/books/selector";

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
    <div>
      Book Details
      {bookDetails.map((details) => {
        return (
          <div>
            <p>{details.name}</p>
            <p>{details.author}</p>
            <img
              src={details.imageUrl}
              alt='book cover'
              height='200px'
              width='200px'
            />
            <p>{details.description}</p>
          </div>
        );
      })}
    </div>
  );
}
