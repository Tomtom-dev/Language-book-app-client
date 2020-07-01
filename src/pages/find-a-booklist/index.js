import React,{useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {fetchProducts} from "../../store/books/action"

import './index.css'
import axios from 'axios'

export default function FindABookList() {

    const [language, setLanguage] = useState("")
    const [word, setWord] = useState("search")
    const [result, setResult] = useState([])


    const dispatch = useDispatch()
    const apiKey=process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    
    // fetch the data from google book api
    useEffect(() => {
       dispatch(fetchProducts(language,word))
    }, [])
    
    function onSubmit(event){
        event.preventDefault()
        console.log(language);
        console.log(word); 
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
        </div>
    )
}
