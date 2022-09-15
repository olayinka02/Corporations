import React, { Component } from 'react';
import NavBodyx from './NavBodyx';
import Newsletter from './Newsletter';
import BottomNav from './BottomNav'
import Howitwork from './Howitwork';
import FeaturesPage from './FeaturesPage';
import { Container } from 'react-bootstrap';



class SupportPage extends Component {
    render() {

        return (
            <div>
                <NavBodyx />
                <Container fluid>
                    <center>
                        <h1>SupportPage</h1>
                    </center>
                </Container>
                <Howitwork />
                <FeaturesPage />
                <Newsletter />
                <BottomNav />
            </div>
        );
    }
}

export default SupportPage;

