import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import MyBooks from "./pages/my-books";
import FindABookList from "./pages/find-a-booklist";
import BookDetails from "./pages/book-details";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


import Navbar from "./components/Navbar";

function App() {
  return (
    
    <Router>
      <ReactNotification />
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/homepage' component={Homepage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/MyBooks' component={MyBooks} />
          <Route exact path='/findBook' component={FindABookList} />
          <Route exact path='/MyBooks/:id' component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
