import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import './EditAccount.css';

export default class EditAccount extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    handleFieldChange = (e, key) => {

        this.setState(previousState => ({
            user: { ...previousState.user,  [key]: e.target.value }
            }));
    };

    handleSaveChanges = (e) => {
        e.preventDefault();
        // Update changes to database.
    };

    render() {
        return (
            <Form>

                <h3> Edit Account Information </h3>

                <FormGroup row>
                    <Label for="firstName"> First Name </Label>
                    <Col>
                        <Input type="text" name="firstName" id="firstName" onChange={(e) => this.handleFieldChange(e, "firstName")}
                               value={this.state.user.firstName} placeholder="First Name"  />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="lastName"> Last Name </Label>
                    <Col>
                        <Input type="text" name="lastName" id="lastName" onChange={(e) => this.handleFieldChange(e, "lastName")}
                               value={this.state.user.lastName} placeholder="Enter Last Name"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="email"> Email </Label>
                    <Col>
                        <Input type="email" name="email" id="email" onChange={(e) => this.handleFieldChange(e, "username")}
                               value={this.state.user.username} placeholder="Enter Email"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password"> Change Password </Label>
                    <Col>
                        <Input type="password" name="password" id="password" placeholder="Enter your password"
                               onChange={(e) => this.handleFieldChange(e, "password")}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="confirmPassword"> Confirm New Password </Label>
                    <Col>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm new password"/>
                    </Col>
                </FormGroup>

                <Button size="lg" onChange={this.handleSaveChanges}> Save Changes </Button>
                <Button size="lg"> Close </Button>

            </Form>
        )
    }
}