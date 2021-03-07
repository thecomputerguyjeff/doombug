import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./LoginPage";
import SignUp from "./SignUp";
import Head from "./Head";
import './LoginPage.css';

function App() {
  let isLoggedIn = false;
  let username = "shmo";
  let email = "shmo@gmail";
  return (<Router>
        <div className="App">
          <Head isLoggedIn = {isLoggedIn} username={username} email={email}/>

          <div className="outer">
            <img src="fixed3.webp"  id="gif" />
            <img src="fixed3.webp" id="gif2"/>
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
  );
}
//exporting
export default App;