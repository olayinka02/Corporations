import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NavBodyx from './component/NavBodyx';


class Pricing extends Component {
  render() {

    return (
      <div classname="BodySection">
        {/* Navbar */}
        <NavBodyx />

        {/* first container*/}
        <Container className='FirstContainer'>
          <h1>hello pricing</h1>
        </Container>

        {/* About Us Section */}
       
      </div>
    );
  }
}

export default Pricing;


