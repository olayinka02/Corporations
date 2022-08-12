import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { Sling as Hamburger } from 'hamburger-react';
import './Styled/NavBodyxstyle.css';
import logo from './images/logo.svg';





class NavBodyx extends Component {

    render() {



        return (
            <div>
                <Navbar  sticky="top"  expand="lg" className="NavBarBody">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <Image src={logo} fluid />
                        </Navbar.Brand>


                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "whitesmoke", }} >
                            <Hamburger duration={0.8} hideOutline={false} />
                        </Navbar.Toggle>


                        <Navbar.Collapse id="basic-navbar-nav" className="navChildrenWrap">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className="navwrap">
                                <Nav.Link  >
                                    <Link className="navChildren" to="./">Home </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="./price">How it works </Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link className="navChildren" to="./price">Features </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="./price">Pricing </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="./price">Support </Link>
                                </Nav.Link>
                                 
                                <Link className="btnNownavx" to="/login">
                                <Button variant="light" className="loginbtn" size="sm">
                                    Login
                                </Button>
                                </Link>
                                {' '}
                                <Link className="btnNownav" to="/registration">
                                    <Button variant="primary" className="Accountbtn" size="sm" >
                                        Create Account
                                    </Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        )


    }
}
export default NavBodyx;
