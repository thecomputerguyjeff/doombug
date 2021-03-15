import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from "./components/Head";
import {Routes} from "./Routes";

const App = () => {
    const [user, setUser] = useState('');
    const [isSignedUp, setSignedUp] = useState(false);

    return (
        <div className="App">
            <Head isLoggedIn={user !== ''} firstName={user.firstName} email={user.email} username={user.username}/>
            <div className="outer">

                <div className="routes">
                    <Routes setUser={setUser} setSignedUp={setSignedUp} isSignedUp={isSignedUp}/>
                </div>
            </div>
        </div>
    );
}
export default App;