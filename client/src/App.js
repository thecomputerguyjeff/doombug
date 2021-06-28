import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from "./components/Head";
import {Routes} from "./Routes";
import Login from "./components/LoginPage";

const App = () => {
    const [user, setUser] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [toggleLogInSignUp, setToggleLogInSignUp] = useState(true);
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);


    return (

        <div className="App">

            <Head isLoggedIn={user !== ''} setUser={setUser} user={user} toggleLogInSignUp={toggleLogInSignUp}
                  setToggleLogInSignUp={setToggleLogInSignUp} redirect={redirect} setRedirect={setRedirect}/>
            <div className="outer">

                <div className="routes">


                    <Routes setUser={setUser} user={user} toggleLogInSignUp={toggleLogInSignUp}
                            setToggleLogInSignUp={setToggleLogInSignUp} />

                </div>
            </div>
        </div>

    );
};
export default App;