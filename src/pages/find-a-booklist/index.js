import React,{useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './index.css'
import axios from 'axios'

export default function FindABookList() {

    const [language, setLanguage] = useState("")
    const [word, setWord] = useState("history")
    const [result, setResult] = useState([])

    const Key="AIzaSyDaBw7bLrb_TtZx2Ei2os4dSvQJ85nRW9c"
    
    // fetch the data from google book api
    useEffect(() => {
        const fetchData = async()=>{
            const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${word}&key=${Key}&maxResults=40`)
            setResult(response.data)
        }
        
        fetchData()
        
    }, [])
        
    console.log(result);
    
    function onSubmit(event){
        event.preventDefault()
        console.log(language);
        console.log(word);    
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
