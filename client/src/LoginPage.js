import React, { Component } from "react";
import { Alert } from 'reactstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: "",
                      password: "",
                      renderAlert: false,
                      reloginPrompt: '',
                     };
    }

    handleEmailFieldChange = (e) => {
        this.setState({email: e.target.value,
                             renderAlert: false});
    }

    handlePasswordFieldChange = (e) => {
        this.setState({password: e.target.value,
                             renderAlert: false});
    }

    handleLogin = (e) => {
        e.preventDefault(); // Prevents the form from submitting when Submit button is clicked
        const email =  this.state.email.trim();
        const password =  this.state.password.trim();

        if (email.localeCompare("") === 0 || password.localeCompare("") === 0) {
            this.setState({renderAlert: true});

        } else {

            fetch(process.env.REACT_APP_BACKEND_URL + "api/v1/login", {
                method: "POST",
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.email,
                    password: this.state.password
                }),
               
            })
                .then(res => res.json())
                .then((response) => {
                    this.setState({
                        userKey: response.userKey
                    })                    
                })
                .catch(err=> {
                    console.log(err);
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

                { this.state.reloginPrompt &&
                <Alert>Error. Please log in again.</Alert> }

                <h3>Log in</h3>
                {/*The role of form-group is to track the value and validation state of form control*/}
                <div className="form-group">

                    <label>Email</label>
                    <input type="email" onChange = {this.handleEmailFieldChange}  className="form-control" id = "email" placeholder="Enter email" />

                </div>
                {/*form-control Provides context such as filled/focused/error/required for form inputs*/}
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange = {this.handlePasswordFieldChange}  className="form-control" id = "password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick = {this.handleLogin} className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
        );
    }
}
