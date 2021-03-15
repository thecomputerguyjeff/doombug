import React, {Component} from "react";
import {Alert} from 'reactstrap';
import {post} from "../helper/Fetch";
import {ReroutToLogin} from "./ReroutToLogin";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
username: "",
            reloginPrompt: false,
            redirect: false,
        };
    }

    handleFieldChange = (e, key) => {
        this.setState({
            [key]: e.target.value,

        });
    }

    handleLogin = (e) => {
        e.preventDefault(); // Prevents the form from submitting when Submit button is clicked





            post("api/v1/signUp", {
                    email: this.state.email,
                    password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                }
            ).then()
                .then((response) => {
                    this.setState({
                        user: response
                    });
                    //this.props.setUser(response)
                    this.setState({redirect: true});
                })
                .catch(err => {
                    this.setState({reloginPrompt: true});
                });
        }


    render() {
        return (
            <form>
                {this.state.redirect && <ReroutToLogin setUser={this.state.setUser}/>}
                {this.state.renderAlert && <Alert color="danger">
                    Error! Both the email and password fields must be filled in order to login. Please try again.
                </Alert>
                }

                {this.state.reloginPrompt &&
                <Alert color="danger">Error-incorrect login credentials. Please log in again.</Alert>}

                <h3>Sign up</h3>
                <div className="form-group">

                    <label>Username</label>
                    <input  type="text" onChange={(e)=>this.handleFieldChange(e, 'username')} className="form-control" id="username"
                            placeholder="Enter username"/>

                </div>
                <div className="form-group">

                    <label>First name</label>
                    <input  type="text" onChange={(e)=>this.handleFieldChange(e, 'firstName')} className="form-control" id="firstName"
                            placeholder="First name"/>

                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" onChange={(e)=>this.handleFieldChange(e, 'lastName')} className="form-control" id = "lastName" placeholder="Last name" />
                </div>

                <div className="form-group">

                    <label>Email</label>
                    <input type="email" onChange={(e)=>this.handleFieldChange(e, 'email')} className="form-control" id="email"
                           placeholder="Enter email"/>

                </div>
                <div className="form-group">
                    <label>Confirm Email</label>
                    <input type="email" className="form-control"  placeholder="Confirm email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>this.handleFieldChange(e, 'password')} className="form-control"
                           id="password" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control"  placeholder="Confirm password" />
                </div>



                <button type="submit" onClick={this.handleLogin} className="btn btn-dark btn-lg btn-block">Sign up
                </button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
        );
    }
}
