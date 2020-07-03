import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchProducts, addBooks } from "../../store/books/action";
import { getBooksRespond } from "../../store/books/selector";
import { addToSelection } from "../../store/bookSelection/action";
import { getUserInfosId, selectToken } from "../../store/user/selector";

import "./index.css";

export default function FindABookList() {
  const [language, setLanguage] = useState("");
  const [word, setWord] = useState("");
  // const [bookId, setBookId] = useState();

  const dispatch = useDispatch();
  const result = useSelector(getBooksRespond);
  const idUser = useSelector(getUserInfosId);
  console.log("User Info", idUser);
  const history = useHistory();
  //   const token = useSelector(selectToken);
  //   console.log(token);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(fetchProducts({ language, word }));
  }

  function addBook(event) {
    event.preventDefault();
    console.log("Added", event.target.id, " TESTING ", result);

    const booksData = result.find((books) => {
      if (books.id === event.target.id) {
        return books;
      }
    });

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
    console.log("Data", data);
    dispatch(addBooks(data));
    dispatch(addToSelection(data));
    history.push("/MyBooks");

    console.log("BOOKS DETAILS ", booksData, "..... DATA ........ ", data);
  }

  return (
    <div>
      <h2>Find a book</h2>

      <Form className='form-booklist'>
        <FormGroup className='input-select-size'>
          <Label>choose a book </Label>
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
              <div key={book.id}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
                <p>{book.volumeInfo.authors}</p>
                {/* <p>{book.id}</p> */}
                {idUser !== undefined && (
                  <div className='div-button_find_book'>
                    <button
                      id={book.id}
                      onClick={addBook}
                      className='button_find_books'>
                      Add
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
