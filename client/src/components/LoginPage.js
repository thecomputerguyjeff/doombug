import React, {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {post} from "../helper/Fetch";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            renderAlert: false,
            reloginPrompt: false,
        };
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            renderAlert: false,
        })
    }

    handleLogin = (e) => {
        e.preventDefault(); // Prevents the form from submitting when Submit button is clicked
        const email = this.state.email.trim();
        const password = this.state.password.trim();

        if (email.localeCompare("") === 0 || password.localeCompare("") === 0) {
            this.setState({renderAlert: true});

        } else {
            post("api/v1/login", {
                    username: this.state.email,
                    password: this.state.password
                }
            ).then(res => res.json())
                .then((response) => {
                    this.setState({
                        user: response
                    });
                    this.props.setUser(response)
                })
                .catch(err => {
                    this.setState({reloginPrompt: true});
                });
        }
    }

    render() {
        return (
            <Form>
                {this.state.renderAlert && <Alert color="danger">
                    Error! Both the email and password fields must be filled in order to login. Please try again.
                </Alert>
                }

                {this.state.reloginPrompt &&
                <Alert color="danger">Error-incorrect login credentials. Please
                    log in again.</Alert>}
                <h3>Log in</h3>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.handleFieldChange}
                           placeholder="Enter email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={this.handleFieldChange}
                           placeholder="Enter password"/>
                </FormGroup>
                <FormGroup check>
                    <Label check for="remember">
                        <Input type="checkbox" id="remember"/>
                        Remember Me
                    </Label>
                </FormGroup>
                <Button size="lg" block color="dark" onClick={this.handleLogin}>Sign in</Button>
            </Form>
        );
    }
}
