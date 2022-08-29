import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

//import './Styled/Dashboardstyle.css';




class DashboardPage extends Component {
    render() {

        return (
              
              <Container fluid>
                <Row style={{left:0,backgroundColor:'blue',height:100+'vh'}}>
                    <Col xs={12} md={2}  style={{left:0,backgroundColor:'green',color:'yellow',}}>
                       
                    </Col>
                    <Col  xs={12} md={10} ></Col>
                </Row>
              </Container>
            
  
        );
    }
}

export default DashboardPage;
