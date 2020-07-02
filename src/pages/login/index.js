import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import {useParams} from 'react-router-dom'
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {login} from "../../store/user/action"
import './index.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const dispatch= useDispatch()
    // const id = useParams().id
  function submitForm(event) {
    event.preventDefault();
    console.log(email, password);

    setEmail("");
    setPassword("");
  }

    function submitForm (event){
       
        event.preventDefault();
        dispatch(login({email,password}))
      
        setEmail("");
        setPassword("");
    }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Container>
        <Form>
          <Form.Group controlId='formBasicEmail' className='form-size'>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email'
              placeholder='Email'
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword' className='form-size'>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              placeholder='Password'
              required
            />
          </Form.Group>

          <Form.Group style={{ textAlign: "center" }}>
            <Button variant='primary' type='submit' onClick={submitForm}>
              Log in
            </Button>
            <span> | Not registered ? </span>
            <Link to='/signup' style={{ textAlign: "center" }}>
              Sign Up
            </Link>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
