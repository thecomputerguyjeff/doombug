import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from "./components/Head";
import {Routes} from "./Routes";

const App = () => {
    const [user, setUser] = useState('');

    return (
        <div className="App">
            <Head isLoggedIn={user !== ''} username={user.firstName} email={user.email}/>
            <div className="outer">
                <img src="fixed3.webp" id="gif"/>
                <img src="fixed3.webp" id="gif2"/>
                <div className="routes">
                    <Routes setUser={setUser} user={user}/>
                </div>
            </div>
        </div>
    );
}
export default App;