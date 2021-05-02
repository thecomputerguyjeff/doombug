import React, {Component, useEffect} from "react";
import {Alert} from 'reactstrap';
import {post} from "../helper/Fetch";
import App from "../App";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            renderAlert: false,
            reloginPrompt: false,
        };
        this.props.setToggleLogInSignUp(false)

    }


    handleFieldChange = (e, key) => {
        this.setState({
            [key]: e.target.value,
            renderAlert: false,
            reloginPrompt: false
        });
    };


    handleLogin = (e) => {
        e.preventDefault(); // Prevents the form from submitting when Submit button is clicked
        const username = this.state.username.trim();
        const password = this.state.password.trim();

        if (username.localeCompare("") === 0 || password.localeCompare("") === 0) {
            this.setState({renderAlert: true});

        } else {
            post("api/v1/login", {
                    username: this.state.username,
                    password: this.state.password
                }
            ).then(res => {
                if (res.status === 200)
                    return res.json();
                throw 'not 200'
            })
                .then((response) => {
                    this.props.setUser(response)

                    localStorage.setItem('user', JSON.stringify(response));


                })
                .catch(err => {
                    this.setState({reloginPrompt: true});
                });
        }


    }


    render() {
        return (

            <form>

                {this.state.renderAlert && <Alert color="danger">
                    Error! Both the email and password fields must be filled in order to login. Please try again.
                </Alert>
                }

                {this.state.reloginPrompt &&
                <Alert color="danger">Error-incorrect login credentials. Please log in again.</Alert>}

                <h3>Log in</h3>
                {/*The role of form-group is to track the value and validation state of form control*/}
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" onChange={(e) => this.handleFieldChange(e, 'username')} className="form-control"
                           id="username"
                           placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => this.handleFieldChange(e, 'password')}
                           className="form-control"
                           id="password" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" onClick={this.handleLogin} className="btn btn-dark btn-lg btn-block">Sign in
                </button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
