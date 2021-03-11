import React, { useState } from 'react';
import Login from "./LoginPage";
import SignUp from "./SignUp";
import './Switcher.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Switcher = (props) => {
    return (
        <Router>
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
        </Router>
    );
}
export default Switcher