import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import NavBodyx from './NavBodyx';
import HeroSection from './HeroSection';
import Howitwork from './Howitwork';
import FeaturesPage from './FeaturesPage';
import TestimonialPage from './TestimonialPage';
import Newsletter from './Newsletter';
import BottomNav from './BottomNav'



class LandingPage extends Component {
  render() {

    return (
      <div>
        <NavBodyx />
        <HeroSection />
        <Howitwork />
        <FeaturesPage />
        <TestimonialPage />
        <Newsletter />
        <BottomNav />
      </div>
    );
  }
}

export default LandingPage;

