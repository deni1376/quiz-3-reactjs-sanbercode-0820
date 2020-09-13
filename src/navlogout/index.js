import React from "react";
import "./index.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../home/home"
import About from '../about/about'
import Login from '../login/login'
import logo from '../public/img/logo.png'


export default function App() {
  return (
    <Router>
      <div>
      <header>
      <img id="logo" src={logo} width="200px" />
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* contoh tag route tanpa end tag */}
          <Route exact path="/" component={Home}/>
          
          {/* contoh dengan tag dengan end tag */}
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>



          {/* <Route exact path="/Tugas-12" component={Lists}/>
          <Route exact path="/Tugas-13" component={HooksApi}/>
          <Route exact path="/Tugas-14" component={Context}/>
          <Route exact path="/Tugas-15" component={ChangeTheme}/> */} 
        </Switch>
        <footer>
      <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
      </div>
    </Router>
  );
}
