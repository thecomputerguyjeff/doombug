import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./LoginPage";
import SignUp from "./SignUp";
import Head from "./Head";
import Switcher from "./Switch";

function App() {
  let isLoggedIn = false;
  let username = "shmo";
  let email = "shmo@gmail";
  return (<Router>
        <div className="App">
          <Head isLoggedIn = {isLoggedIn} username={username} email={email}/>
          <Switcher/>
        </div>
      </Router>
  );
}
export default App;