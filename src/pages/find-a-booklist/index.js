import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {fetchProducts} from "../../store/books/action"
import {getBooksRespond} from "../../store/books/selector"

import './index.css'


export default function FindABookList() {

    const [language, setLanguage] = useState("")
    const [word, setWord] = useState("search")
    
    const dispatch = useDispatch()
    const result = useSelector(getBooksRespond)
    
    // fetch the data from google book api
    // useEffect(() => {
    //    dispatch(fetchProducts(language,word))
    // }, [dispatch,language,word])
    
    function onSubmit(event){
        event.preventDefault()
        dispatch(fetchProducts({language,word}))   
    }
    
    return (
        <div>
            <h2>Find a booklist</h2>
            
            <Form className="form-booklist">
                <FormGroup className="input-select-size">
                    <Label>select a type </Label>
                    <Input type="search"
                     onChange={event =>setWord(event.target.value)}
                      value={word}>
                        
                    </Input>
                </FormGroup>

                <FormGroup  className="input-select-size">
                    <Label>select a language</Label>
                    <Input className="input-select-size"
                     type="select" onChange={event =>setLanguage(event.target.value)} value={language}>
                        <option defaultValue="selected">choose a language</option>
                        <option>en</option>
                        <option>nl</option>
                        <option>fr</option>
                    </Input>
                </FormGroup>
                
            </Form>
                <FormGroup  style={{paddingLeft:"2%"}}>
                    <Button onClick={onSubmit}>search</Button>
                    
                </FormGroup>

                {result.map(book =>(
                    <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                ))}
        </div>
    )
}
