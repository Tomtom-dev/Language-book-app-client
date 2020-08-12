import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/user/action";
import {  getUserInfosId } from "../../store/user/selector";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(getUserInfosId);
  const dispatch = useDispatch();
  // console.log("Token", token);

  const history = useHistory();

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/");
  //   }
  // }, [token, history]);

  //const id = useParams().id

  if (token !== undefined) {
    history.push("/findBook");
  }

  function submitForm(event) {
    event.preventDefault();
    dispatch(login({ email, password }));

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
