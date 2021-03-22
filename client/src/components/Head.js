import React, {useState} from 'react';
import './Head.css';
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
            <Navbar color="light" light expand="md">
                {props.isLoggedIn && <span className="LogoWhenLoggedIn">D</span>}
                {props.isLoggedIn && <span><img
                    src="bug4.jpg"
                    width="40"
                    height="40"
                /></span>}
                {props.isLoggedIn && <span className="LogoWhenLoggedIn">omBug</span>}
                {!props.isLoggedIn && <span className="LogoWhenLoggedOut-FirstPart">D</span>}
                {!props.isLoggedIn && <span><img
                    src="bug4.jpg"
                    width="40"
                    height="40"
                />
                </span>}
                {!props.isLoggedIn && <span className="LogoWhenLoggedOut-SecondPart">omBug</span>}
                <Nav className="mr-auto" navbar>
                </Nav>
                {!props.isLoggedIn && <NavLink href={"/sign-in"}>Sign in</NavLink>}
                {!props.isLoggedIn && <NavLink href={"/sign-up"}>Sign up</NavLink>}
                {props.isLoggedIn && <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                        {props.username}'s account
                    </DropdownToggle>
                    <DropdownMenu right>
                        <div className="email">{props.email}</div>
                        <DropdownItem className="dropDownItem">
                            <Link className="editAccountLink" to={{
                                pathname: "/edit-account",
                                state: {user: props.email}
                            }}> Edit Account
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>}
            </Navbar>
        </div>
    );
}
export default Head;