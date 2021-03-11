import React, { Component } from "react";
export default class SignUp extends Component {
    render() {
        return (
            <form>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="fname" className="form-control" id = "fname" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="lname" className="form-control" id = "lname" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" id = "email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Confirm Email</label>
                    <input type="email" className="form-control" id = "email" placeholder="Confirm email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id = "password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id = "password" placeholder="Confirm password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign up</button>

            </form>
        );
    }
}