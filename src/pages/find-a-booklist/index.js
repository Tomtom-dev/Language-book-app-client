import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchProducts, addBooks } from "../../store/books/action";
import { getBooksRespond } from "../../store/books/selector";

import "./index.css";

export default function FindABookList() {
  const [language, setLanguage] = useState("");
  const [word, setWord] = useState("");
  const [bookId, setBookId] = useState();

  const dispatch = useDispatch();
  const result = useSelector(getBooksRespond);
  console.log("Book response", result);

  // fetch the data from google book api
  // useEffect(() => {
  //    dispatch(fetchProducts(language,word))
  // }, [dispatch,language,word])
  //   const booksData = result.map((books) => {
  //     const data = {
  //       name: books.volumeInfo.authors,
  //     };
  //     console.log("Data", data);
  //   });
  //   console.log("Details", booksData);
  //   const data = result.find((books) => {
  //     return books.id;
  //   });

  //   console.log("data", data);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(fetchProducts({ language, word }));
  }

  function addBook() {
    console.log("Added");

    const booksData = result.map((books) => {
      const data = {
        name: books.volumeInfo.title,
        author: books.volumeInfo.authors,
        description: books.volumeInfo.description,
        category: books.volumeInfo.categories,
        language: books.volumeInfo.language,
        imageUrl: books.volumeInfo.imageLinks.thumbnail,
      };
      console.log("Data", data);
      dispatch(addBooks(data));
    });
  }
  console.log("Book Id", bookId);

  return (
    <div>
      <h2>Find a booklist</h2>

      <Form className='form-booklist'>
        <FormGroup className='input-select-size'>
          <Label>select a type </Label>
          <Input
            type='text'
            placeholder='search'
            onChange={(event) => setWord(event.target.value)}
            value={word}></Input>
        </FormGroup>

        <FormGroup className='input-select-size'>
          <Label>select a language</Label>
          <Input
            className='input-select-size'
            type='select'
            onChange={(event) => setLanguage(event.target.value)}
            value={language}>
            <option defaultValue='selected'>choose a language</option>
            <option>en</option>
            <option>nl</option>
            <option>fr</option>
          </Input>
        </FormGroup>
      </Form>
      <FormGroup style={{ paddingLeft: "2%" }}>
        <Button onClick={onSubmit}>search</Button>
      </FormGroup>
      <div className='image_border'>
        <div className='image_find_book'>
          {/* {result.map((book) => (
            <img
              key={book.id}
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.title}
            />
          ))} */}
          {result.map((book) => {
            return (
              <div>
                <img
                  key={book.id}
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
                <p>{book.volumeInfo.authors}</p>
                <p>{book.id}</p>
                <div className='div-button_find_book'>
                  <button
                    value={book.id}
                    onClick={addBook}
                    className='button_find_books'>
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
