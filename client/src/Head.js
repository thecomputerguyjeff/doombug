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
            <Navbar color="light"  light expand="md" >
                {props.isLoggedIn && <span class = "LogoWhenLoggedIn" >D</span>}
                {props.isLoggedIn &&<span><img
                    src="bug4.jpg"
                    width="40"
                    height="40"
                    /></span>}
                {props.isLoggedIn && <span class = "LogoWhenLoggedIn" >omBug</span>}
                {!props.isLoggedIn && <span class="LogoWhenLoggedOut-FirstPart">D</span>}
                    {!props.isLoggedIn &&<span><img
                        src="bug4.jpg"
                        width="40"
                        height="40"
                    />
                </span>}
                {!props.isLoggedIn && <span class="LogoWhenLoggedOut-SecondPart">omBug</span>}
                <Nav className="mr-auto" navbar>
                </Nav>
                {!props.isLoggedIn && <NavLink  href={"/sign-in"}>Sign in</NavLink>}
                {!props.isLoggedIn && <NavLink href={"/sign-up"}>Sign up</NavLink>}
                {props.isLoggedIn && <UncontrolledDropdown >
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