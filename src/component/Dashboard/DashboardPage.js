import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import { Container, Row, Col, Form , Image} from 'react-bootstrap';

import { Bell } from 'react-bootstrap-icons';
import Profile from '../images/profile.png';

//import './Styled/Dashboardstyle.css';




class DashboardPage extends Component {
    render() {

        return (

            <Container fluid>
                <Row style={{ left: 0, backgroundColor: '#F5F5F5', height: 100 + 'vh' }}>
                    <Col xs={12} md={2} style={{ left: 0, backgroundColor: '#404690', }}>

                    </Col>
                    <Col xs={12} md={10} style={{ paddingTop: 10, paddingBottom: 10, }}>
                        <div style={{display: 'flex',flexDirection:'row',alignItems:'center',gap:47+'%',}}>
                            <Form.Control style={{ width: 30 + '%', borderRadius: 35 + 'rem' }} type="email" placeholder="Search" />
                            <div  style={{display: 'flex',flexDirection:'row',alignItems:'center',gap:17,}} >

                                <div style={{ padding: 4, backgroundColor: 'white', width:  40+'px', height:  40+'px',justifyContent:'center',borderRadius: 35 + 'rem',display: 'flex',flexDirection:'row',alignItems:'center', }}>
                                    <Bell />
                                </div>
                                <span>Olayimika </span>
                                <Image style={{width:40+'px', height:40+'px'}} src={Profile} alt='image' />


                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>


        );
    }
}

export default DashboardPage;
