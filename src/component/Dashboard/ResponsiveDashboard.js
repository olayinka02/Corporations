import React, { Component } from 'react';
// import DashboardPage from './DashboardPage';
//import { Container } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
import '../Styled/ResponsiveDashboardstyle.css';

import MobileDashboard from './MobileDashboard';
import DashboardPage from './DashboardPage';




class ResponsiveDashboard extends Component {
    render() {

        return (
              
        <div>
            <div className="mobile" >
            <MobileDashboard />
            </div>

            <div className="web" >
            <DashboardPage />
            </div>
          
        </div>
            
  
        );
    }
}

export default ResponsiveDashboard;
