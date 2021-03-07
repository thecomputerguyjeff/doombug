import React, { useState } from 'react';
import  './Head.css';
import {
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

const Head = (props) => {
    return (
        <div>
            <Navbar color="light"  light expand="md">
                {props.isLoggedIn === false && <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                <NavbarBrand>D
                    <img
                        src="bug4.jpg"
                        width="40"
                        height="40"

                    />omBug
                </NavbarBrand>


                <Nav className="mr-auto" navbar>


                </Nav>
                {props.isLoggedIn === false && <NavLink  href={"/sign-in"}>Sign in</NavLink>
                }
                {props.isLoggedIn === false && <NavLink href={"/sign-up"}>Sign up</NavLink>}
                {props.isLoggedIn === true && <UncontrolledDropdown >
                    <DropdownToggle nav caret>
                        {props.username}'s account
                    </DropdownToggle>
                    <DropdownMenu right>
                        <div class="email">{props.email}</div>

                        <DropdownItem >
                            edit
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>}


            </Navbar>
        </div>
    );
}

export default Head;