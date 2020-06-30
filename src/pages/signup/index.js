import React, {useState} from 'react'
import{Container,Button, Form, Label, Input, FormGroup} from 'reactstrap'
import { useDispatch } from "react-redux";

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    function submitForm(event){
        event.preventDefault();

        console.log(name,email,password);
        
        // dispatch(signUp(name,email,password))
        setEmail("");
        setPassword("");
        setName("");
        
    }

    return (
        <div>
             <Container >
            
            <Form className="form-size contain">
            <h2>Sign up</h2>
                <FormGroup>
                    <Input type='text' placeholder="Name" 
                    value={name} onChange={event => setName(event.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type='email' placeholder="Email" 
                    value={email} onChange={event => setEmail(event.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type='password' placeholder="Password" 
                    value={password} onChange={event => setPassword(event.target.value)}></Input>
                </FormGroup>

                <div>
                <FormGroup >
                    
                <Button color="primary"  type="submit" onClick={submitForm}>Register</Button>
                </FormGroup>
                
                </div>
            </Form>
            </Container>
        </div>
    )
}
