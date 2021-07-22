import React, {useEffect, useState} from 'react';
import bug from './bug4.jpg'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {unmountComponentAtNode} from "react-dom";
import Feed from "./Try3";
import * as ReactDOM from "react-dom";


const Side = (props) => {




    return (

        <div className="sidenav">
            <a href="#about">Home</a>
            <a href="#about">Public</a>
            <a href="#about" id={"indent"}>Questions</a>
            <a href="#about" id={"indent"}>Tags</a>
            <a href="#about" id={"indent"}>Users</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>




    );
}
export default Side;