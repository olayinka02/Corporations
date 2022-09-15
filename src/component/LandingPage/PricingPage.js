import React, { Component } from 'react';
import NavBodyx from './NavBodyx';
import TestimonialPage from './TestimonialPage';
import Howitwork from './Howitwork';
import FeaturesPage from './FeaturesPage';
import Newsletter from './Newsletter';
import BottomNav from './BottomNav'
import { Container } from 'react-bootstrap';



class PricingPage extends Component {
  render() {

    return (
      <div>
        <NavBodyx />
        <Container fluid>
            <center>
            <h1>Hello World</h1>
            </center>
        </Container>
        <Howitwork />
        <FeaturesPage />
        <TestimonialPage />
        <Newsletter />
        <BottomNav />
      </div>
    );
  }
}

export default PricingPage;

