import React, {useState} from 'react';
import './Head.css';
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
                {!props.isLoggedIn && props.toggleLogInSignUp && <Button href={"/sign-in"}>Sign in</Button>}
                {!props.isLoggedIn && !props.toggleLogInSignUp && <Button href={"/sign-up"}>Sign up</Button>}
                {props.isLoggedIn && <UncontrolledDropdown>
                    <DropdownToggle caret size={"md"}>
                        {props.firstName}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            edit profile
                        </DropdownItem>
                        <DropdownItem onClick={() => window.location.href = "/sign-in"}>
                            log out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>}
            </Navbar>
        </div>
    );
}
export default Head;