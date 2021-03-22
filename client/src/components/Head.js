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
import {Link} from "react-router-dom";

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
                {!props.isLoggedIn && props.toggleLogInSignUp && <Button onClick={()=>window.location.href = "/sign-in"}>Sign in</Button>}
                {!props.isLoggedIn && !props.toggleLogInSignUp && <Button onClick={()=>window.location.href = "/sign-up"}>Sign up</Button>}


                {props.isLoggedIn && <UncontrolledDropdown>

                    <DropdownToggle  caret size={"md"}>
                        {props.user.firstName}'s Account
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem className="dropDownItem">
                            <Link className="editAccountLink" to={{
                                pathname: "/edit-account",
                                state: {user: props.user} }}>

                                Edit Account
                            </Link>
                        </DropdownItem>
                        
                    </DropdownMenu>
                </UncontrolledDropdown>}
            </Navbar>
        </div>
    );
}
export default Head;