import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from "./components/Head";
import {Routes} from "./Routes";

const App = () => {
    const [user, setUser] = useState('');
    const [toggleLogInSignUp, setToggleLogInSignUp] = useState(true);

    return (
        <div className="App">
            <Head isLoggedIn={user !== ''} user={user} toggleLogInSignUp={toggleLogInSignUp}
                  setToggleLogInSignUp={setToggleLogInSignUp}/>
            <div className="outer">

                <div className="routes">

                    <Routes setUser={setUser} user={user} setToggleLogInSignUp={setToggleLogInSignUp}/>

                </div>
            </div>
        </div>
    );
};
export default App;