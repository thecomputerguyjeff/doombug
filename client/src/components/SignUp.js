import React, {Component} from "react";
import {post} from "../helper/Fetch";
import { Alert } from 'reactstrap';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
            renderAlert: false,
        };
        this.props.setToggleLogInSignUp(true)
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            renderAlert: false
        });
    }

    handleSignUp = (e) => {
        e.preventDefault();

        const {
            fName,
            lName,
            email,
            confirmEmail,
            password,
            confirmPassword,
        } = this.state

        const validPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,}$/

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(fName.localeCompare("") === 0 || lName.localeCompare("") === 0 ||
            email.localeCompare("") === 0 || password.localeCompare("") === 0 ||
            email.localeCompare(confirmEmail) !== 0 || password.localeCompare(confirmPassword)
            || !validPassword.test(password)
            || !validEmail.test(email)
        ){
            this.setState({renderAlert: true})
        } else{
            this.setState({renderAlert: false})
            //creat new account!
            post("api/v1/signUp", {
                    password: this.state.password,
                    firstName: this.state.fName,
                    lastName: this.state.lName,
                    username: this.state.email,
                }
            ).then()
                .then(() => {
                    window.location.href = "/sign-in";
                })
                .catch(err => {
                });
        }
    }


    render() {
        return (
            <form>

                {this.state.renderAlert && <Alert color="danger">
                    Error! All fields must be filled in correctly
                </Alert>
                }


                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" title = "Enter first name" name = "fName" onChange={this.handleFieldChange} className="form-control" id = "fname" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" title = "Enter last name" name = "lName" onChange={this.handleFieldChange} className="form-control" id = "lname" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" title = "Must be a valid email" name = "email" onChange={this.handleFieldChange} className="form-control" id = "email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Confirm Email</label>
                    <input type="email" title = "Must match email" name = "confirmEmail" onChange={this.handleFieldChange} className="form-control" id = "email" placeholder="Confirm email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" title = "Minimum six characters with at least one letter and one number" name = "password" onChange={this.handleFieldChange} className="form-control" id = "password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" title = "Must match password" name = "confirmPassword" onChange={this.handleFieldChange} className="form-control" id = "password" placeholder="Confirm password" />
                </div>

                <button type="submit" onClick = {this.handleSignUp} className="btn btn-dark btn-lg btn-block">Sign up</button>

            </form>
        );
    }

}
