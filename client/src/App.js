import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./LoginPage";
import SignUp from "./SignUp";
import bug from './src/bug.jpg';
function App() {
  return (<Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            {/*class is applied to typical branding logo you see in the top navigation bar*/}
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>DoomBug</Link>
              {/*<div>*/}
              {/*    <img src={bug} alt="this is bug image" />*/}
              {/*</div>*/}
              {/*if anyone could figure out how we could add this but to the doombug logo lmk im kind of struggling to do it*/}
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

export default App;