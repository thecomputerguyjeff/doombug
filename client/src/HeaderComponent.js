import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {DropdownMenu} from 'reactstrap';
import {UncontrolledDropdown} from 'reactstrap';
import {DropdownToggle} from 'reactstrap';
import {DropdownItem} from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';

// let username = localStorage.getItem("username");
// let email = localStorage.getItem("email");

const Header = (props) => {

    return (
        <Navbar bg="light" expand="lg">
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <Navbar.Brand href="#home" id={"doombug"}>D<img
                src="bug4.jpg"
                width="70"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />omBug</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Nav>
                <UncontrolledDropdown nav inNavbar className="navbar-brand">
                    <DropdownToggle role="button" className="btn btn-primary btn-circle btn-sm ">
                        {props.username[0].toUpperCase()}
                    </DropdownToggle>
                    <DropdownMenu right >
                        <div className="account">{props.username}</div>
                        <div className="account">{props.email}</div>
                        <DropdownItem divider />
                        <div className="account"><div className="dropdown-item" href="">edit account</div></div>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;