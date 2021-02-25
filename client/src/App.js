import logo from './logo.svg';
import './App.css';
import TestComponent from "./TestComponent";
import Header from "./HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
let username = 'shmo';
let email = "shmo@gmail"
localStorage.setItem("username", username);
localStorage.setItem("email", email);
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>

          <TestComponent />

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
