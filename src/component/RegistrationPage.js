import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Styled/RegistrationPagestyle.css';
import loginlogo from './images/loginlogo.svg';
import CarouselPage from "./CarouselPage";





class RegistrationPage extends Component {

    render() {
        return (

            <Container fluid classname="loginbody">
                <Row>
                    <Col className="LoginInformation" xs={12} md={6} >
                        <CarouselPage />
                        <footer>
                            <ul className="autolayout">
                                <li>Amabillstech.com</li>
                                <li>Technical Support</li>
                                <li>Terms Condition</li>
                                <li>Privacy</li>
                            </ul>
                        </footer>
                    </Col>

                    <Col className="Logindiv" xs={12} md={6}>
                        <center>
                            <Link to="/">
                                <Image className="loginlogo" src={loginlogo} fluid />
                            </Link>
                            <div className="formfillbody">

                                <Form>
                                    <div>
                                        <h5 style={{ float: 'left', fontSize: 1.2 + 'rem' }}>Register a business account</h5><br />


                                    </div><br />
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Row>
                                            <Col>

                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Business Name</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >RC Number</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Tin</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Incorporation Date</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Business Email</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>

                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Business Name</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />

                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Incorporation Date</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Business Email</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Incorporation Date</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" /><br />
                                            </Col>
                                            <Col>
                                                <Form.Label style={{ float: 'left', fontSize: 0.9 + 'rem', textAlign: 'left' }} >Business Email</Form.Label>
                                                <Form.Control style={{ borderRadius: 0.5 + 'rem', height: 2.35 + 'rem' }} type="email" placeholder="Enter Username" />
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check style={{ float: 'left', fontSize: 0.83 + 'rem', textAlign: 'left' }} type="checkbox" label="By clicking, you agree to the Terms and Conditions set out by this site" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                    <Link className="btnNowxx" to="/login">
                                        <Button style={{ width: 100 + '%', borderRadius: 0.5 + 'rem', height: 2.4 + 'rem' }} variant="primary">
                                            Registration
                                        </Button>
                                    </Link>
                                    <br />

                                    <p style={{ float: 'left', marginTop: 0.5 + 'rem', marginLeft: 0.5 + 'rem', color: '#1368D8', fontSize: 0.9 + 'rem', textAlign: 'left' }} className="text-muted">
                                        {" "}Already have an account,
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </p>
                                </Form><br />
                            </div>
                        </center>


                    </Col>
                </Row>
            </Container>



        )
    }
};

export default RegistrationPage;