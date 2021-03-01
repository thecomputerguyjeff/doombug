import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from "./HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./LoginPage";
import SignUp from "./SignUp";




function App() {
  return (<Router>
        <div className="App">

          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <Header email={"sdf"} username={"sdfds"}/>
            {/*class is applied to typical branding logo you see in the top navigation bar*/}
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>DoomBug</Link>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div></Router>
  );
}
//exporting
export default App;