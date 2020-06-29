import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage'
import Login from './pages/login'
import SignUp from './pages/signup'
import MyBooks from './pages/my-books'
import FindABookList from './pages/find-a-booklist'

import Navbar from './components/Navbar'

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/homepage" component={Homepage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/MyBooks" component={MyBooks}/>
                <Route exact path="/findBook" component={FindABookList}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
