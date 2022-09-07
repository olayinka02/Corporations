import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Styled/LoginPagestyle.css';
import loginlogo from './images/loginlogo.svg';
import CarouselPage from "./CarouselPage";





class LoginPage extends Component {

    render() {
        return (

            <Container className="loginPageBody">
                <Row>
                    <Col xs={12} md={6} >
                        <CarouselPage />
                        {/* <footer>
                            <ul>
                                <li>Amabillstech.com</li>
                                <li>Technical Support</li>
                                <li>Terms Condition</li>
                                <li>Privacy</li>
                            </ul>
                        </footer> */}
                    </Col>

                    <Col xs={12} md={6}>
                        <center>
                            <Link to="/">
                                <Image src={loginlogo} fluid />
                            </Link>
                            <div >
                                <div>
                                    <h5 style={{ float: 'left', fontSize: 1.2 + 'rem' }}>Login</h5><br /><br />
                                    <h6 style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Welcome back! Please enter your details.</h6><br />
                                </div><br />

                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.8 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                        <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.8 + 'rem' }} type="email" placeholder="Enter Password" /><br />
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} type="checkbox" label="Check me out" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <div style={{ float: 'right', fontSize: 0.9 + 'rem', textAlign: 'left' }}>
                                                    forget password
                                                </div>

                                            </Col>
                                        </Row>
                                    </Form.Group><br />
                                    <Link  to="/responsivedashboard">
                                        <Button style={{ width: 100 + '%', borderRadius: 0.5 + 'rem', height: 2.8 + 'rem' }} variant="primary">
                                            Login
                                        </Button>
                                    </Link><br />

                                    <p style={{ float: 'left', marginTop: 1 + 'rem', marginLeft: 0.5 + 'rem', color: '#1368D8', fontSize: 0.9 + 'rem', textAlign: 'left' }} className="text-muted">
                                        {" "}Don’t have a business account,
                                        <Link to="/registration">
                                            Register
                                        </Link>
                                    </p><br /><br />
                                </Form>
                            </div>
                        </center>


                    </Col>
                </Row>
            </Container>



        )
    }
};

export default LoginPage;