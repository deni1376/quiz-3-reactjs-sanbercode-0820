import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from "./index/index
/* import PropsBuah from '../Tugas-10/tugas10'
import Timer from '../Tugas-11/timer';
import Lists from '../Tugas-12/listForm';
import HooksApi from '../Tugas-13/hooksApi';
import Context from '../Tugas-14/DaftarBuah';
import ChangeTheme from './changetheme'; */

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Tugas-10">About</Link>
            </li>
            <li>
              <Link to="/Tugas-11">Movie List Editor</Link>
            </li>
            <li>
              <Link to="/Tugas-12">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* contoh tag route tanpa end tag */}
          <Route exact path="/" component={Home}/>
          
          {/* contoh dengan tag dengan end tag */}
          <Route path="/Tugas-10">
            <PropsBuah/>
          </Route>
          <Route path="/Tugas-11">
            <Timer/>
          </Route>


          <Route exact path="/Tugas-12" component={Lists}/>
          <Route exact path="/Tugas-13" component={HooksApi}/>
          <Route exact path="/Tugas-14" component={Context}/>
          <Route exact path="/Tugas-15" component={ChangeTheme}/> 
        </Switch>
      </div>
    </Router>
  );
}
