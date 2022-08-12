import React, { Component } from 'react';
//import { Container } from 'react-bootstrap';
import NavBodyx from './component/NavBodyx';
import HeroSection from './component/HeroSection';
import Howitwork from './component/Howitwork';
import FeaturesPage from './component/FeaturesPage';
import TestimonialPage from './component/TestimonialPage';
import Newsletter from './component/Newsletter';
import BottomNav from './component/BottomNav'



class App extends Component {
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

export default App;


