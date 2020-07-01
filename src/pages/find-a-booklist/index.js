import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './index.css'
import axios from 'axios'

export default function FindABookList() {

    const [language, setLanguage] = useState("")
    const [type, setType] = useState("")

    console.log(language);
    console.log(type);
    
    
    return (
        <div>
            <h2>Find a booklist</h2>
            <Form className="form-booklist">
                <FormGroup  className="input-select-size">
                    <Label>select a language</Label>
                    <Input className="input-select-size" type="select" onChange={event =>setLanguage(event.target.value)} value={language}>
                        <option selected="selected">choose a language</option>
                        <option>EN</option>
                        <option>FR</option>
                        <option>NL</option>
                    </Input>
                </FormGroup>

                <FormGroup className="input-select-size">
                    <Label>select a type </Label>
                    <Input type="select" onChange={event =>setType(event.target.value)} value={type}>
                        <option selected="selected">choose a type</option>
                        <option>Horror</option>
                        <option>Novel</option>
                        <option>Fiction</option>
                    </Input>
                </FormGroup>
            </Form>
        </div>
    )
}
