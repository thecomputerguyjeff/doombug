import React, {Component} from "react";
import {post} from "../helper/Fetch";
import {Alert} from 'reactstrap';

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
            blankFName: false,
            blankLName: false,
            blankEmail: false,
            blankConfirmEmail: false,
            mismatchedEmail: false,
            blankPassword: false,
            blankConfirmPassword: false,
            mismatchedPassword: false,
            invalidEmail: false,
            invalidPassword: false,
        };
        this.props.setToggleLogInSignUp(true)
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            blankFName: false,
            blankLName: false,
            blankEmail: false,
            blankConfirmEmail: false,
            mismatchedEmail: false,
            blankPassword: false,
            blankConfirmPassword: false,
            mismatchedPassword: false,
            invalidEmail: false,
            invalidPassword: false,
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

        if (fName.localeCompare("") === 0) {this.setState({blankFName: true})}
        if (lName.localeCompare("") === 0) {this.setState({blankLName: true})}
        if (email.localeCompare("") === 0) {this.setState({blankEmail: true})}
        else if (!validEmail.test(email)) {this.setState({invalidEmail: true, blankEmail: false})}
        if (confirmEmail.localeCompare("") === 0) {this.setState({blankConfirmEmail: true})}
        else if (email.localeCompare(confirmEmail) !== 0) {this.setState({mismatchedEmail: true})}
        if (password.localeCompare("") === 0) {this.setState({blankPassword: true})}
        else if (!validPassword.test(password)) {this.setState({invalidPassword: true, blankPassword: false})}
        if (confirmPassword.localeCompare("") === 0) {this.setState({blankConfirmPassword: true})}
        else if (password.localeCompare(confirmPassword) !== 0) {this.setState({mismatchedPassword: true})}

        else {
            post("api/v1/signUp", {
                    password: this.state.password,
                    firstName: this.state.fName,
                    lastName: this.state.lName,
                    username: this.state.email,
                }
            ).then(res => {
                if (res.status === 200)
                    return res.json();
                throw 'not 200'
            })
                .then(() => {
                    window.location.href = "/sign-in";
                })
                .catch(err => {
                    this.setState({reloginPrompt: true});
                });
        }
    }


    render() {
        return (
            <form>

                <h3>Sign Up</h3>

                <div className="form-group">
                    {this.state.blankFName && <Alert color="danger">
                        Enter first name
                    </Alert>
                    }
                    <label>First Name</label>
                    <input type="text" title="Enter first name" name="fName" onChange={this.handleFieldChange}
                           className="form-control" id="fname" placeholder="First name"/>
                </div>
                <div className="form-group">
                    {this.state.blankLName && <Alert color="danger">
                        Enter last name
                    </Alert>
                    }
                    <label>Last Name</label>
                    <input type="text" title="Enter last name" name="lName" onChange={this.handleFieldChange}
                           className="form-control" id="lname" placeholder="Last name"/>
                </div>

                <div className="form-group">
                    {this.state.blankEmail && <Alert color="danger">
                        Enter email
                    </Alert>
                    }
                    {this.state.invalidEmail && <Alert color="danger">
                        Email is invalid. Please enter a registered email address.
                    </Alert>
                    }
                    <label>Email</label>
                    <input type="email" title="Must be a valid email" name="email" onChange={this.handleFieldChange}
                           className="form-control" id="email" placeholder="Enter a valid email address"/>
                </div>
                <div className="form-group">
                    {this.state.blankConfirmEmail && <Alert color="danger">
                        Must confirm email
                    </Alert>
                    }
                    {this.state.mismatchedEmail && <Alert color="danger">
                        Error-email does not match. Re-enter email
                    </Alert>
                    }
                    <label>Confirm Email</label>
                    <input type="email" title="Must match email" name="confirmEmail" onChange={this.handleFieldChange}
                           className="form-control" id="confirmEmail" placeholder="Confirm email" />
                </div>

                <div className="form-group">
                    {this.state.blankPassword && <Alert color="danger">
                        Enter password
                    </Alert>
                    }
                    {this.state.invalidPassword && <Alert color="danger">
                        Password is invalid. Enter a password with at least six characters, including at least one letter and one number.
                    </Alert>
                    }
                    <label>Password</label>
                    <br></br>
                    <small>Password must be a minimum of six characters with at least one letter and one number</small>
                        <input type="password" title="Minimum six characters with at least one letter and one number"
                           name="password" onChange={this.handleFieldChange} className="form-control" id="password"
                           placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    {this.state.blankConfirmPassword && <Alert color="danger">
                        Must confirm password
                    </Alert>
                    }
                    {this.state.mismatchedPassword && <Alert color="danger">
                        Error-password does not match. Re-enter password
                    </Alert>
                    }
                    <label>Confirm Password</label>
                    <input type="password" title="Must match password" name="confirmPassword"
                           onChange={this.handleFieldChange} className="form-control" id="confirmPassword"
                           placeholder="Confirm password"/>
                </div>

                <button type="submit" onClick={this.handleSignUp} className="btn btn-dark btn-lg btn-block">Sign up
                </button>

            </form>
        );
    }

}
