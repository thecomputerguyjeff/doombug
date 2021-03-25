import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import './EditAccount.css';

export default class EditAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }

    handleFieldChange = (e, key) => {

        this.setState(previousState => ({
            user: {...previousState.user, [key]: e.target.value}
        }));
    };

    handleSaveChanges = (e) => {
        e.preventDefault();
        // Update changes to database.
    };

    handleCloseButton = (e) => {
        e.preventDefault();
        // Handle Close button to cancel changes made.
    }

    render() {
        return (
            <Form className="edit-account">

                <h3 className="edit-account__header"> Edit Account Information </h3> <br/>

                <FormGroup row>
                    <Label for="firstName" className="edit-account__label"> First Name </Label>
                    <Col>
                        <Input type="text" className="edit-account__input" name="firstName" id="firstName"
                               onChange={(e) => this.handleFieldChange(e, "firstName")}
                               value={this.state.user.firstName} placeholder="First Name"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="lastName" className="edit-account__label"> Last Name </Label>
                    <Col>
                        <Input type="text" className="edit-account__input" name="lastName" id="lastName"
                               onChange={(e) => this.handleFieldChange(e, "lastName")}
                               value={this.state.user.lastName} placeholder="Enter Last Name"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="email" className="edit-account__label"> Email </Label>
                    <Col>
                        <Input type="email" className="edit-account__input" name="email" id="email"
                               onChange={(e) => this.handleFieldChange(e, "username")}
                               value={this.state.user.username} placeholder="Enter Email"/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password" className="edit-account__label"> Change Password </Label>
                    <Col>
                        <Input type="password" className="edit-account__input" name="password" id="password"
                               placeholder="Enter your password"
                               onChange={(e) => this.handleFieldChange(e, "password")}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="confirmPassword" className="edit-account__label"> Confirm New Password </Label>
                    <Col>
                        <Input type="password" className="edit-account__input" name="confirmPassword"
                               id="confirmPassword" placeholder="Confirm new password"/>
                    </Col>
                </FormGroup>

                <Button className="edit-account__button" size="lg" onClick={this.handleSaveChanges}> Save
                    Changes </Button>
                <Button className="edit-account__button" size="lg" onClick={this.handleCloseButton}> Close </Button>

            </Form>
        )
    }
}