import React, { Component } from 'react';
import {  Image, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";


import './Styled/LoginPagestyle.css';
import loginlogo from './images/loginlogo.svg';
import loginimageone from './images/loginimageone.svg';
import loginimagetwo from './images/loginimagetwo.svg';
import loginimagethree from './images/loginimagethree.svg';


class CarouselPage extends Component {
  render() {

    return (
      <div>
        <Link to="/">
        <Image src={loginlogo} fluid />
        </Link>
                        <br /><br />

                        <div>
                            <Carousel controls={false} style={{width:95+'%'}}>
                                <Carousel.Item interval={6000}>
                                    <center>
                                        <div className="textbodyx">
                                            <div>
                                                <Image src={loginimageone} fluid />
                                            </div>
                                            <div>
                                                <h4 className="headingloginx">Business activities at your <span style={{ color: "#58A0DF" }}>finger tips</span></h4>
                                                <p className="paragraphloginx"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                                    dolor enim at nulla. Nunc non egestas vitae quis turpis ut est est
                                                    quis sed praesent. Nulla integer risus dolor .
                                                </p>
                                            </div>
                                        </div>
                                    </center>
                                </Carousel.Item>
                                <Carousel.Item interval={6000}>
                                    <center>
                                        <div className="textbodyx">
                                            <div>
                                                <Image src={loginimagetwo} fluid />
                                            </div>
                                            <div>
                                                <h4 className="headingloginx">Business activities at your <span style={{ color: "#58A0DF" }}>finger tips</span></h4>
                                                <p className="paragraphloginx"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                                    dolor enim at nulla. Nunc non egestas vitae quis turpis ut est est
                                                    quis sed praesent. Nulla integer risus dolor .
                                                </p>
                                            </div>
                                        </div>
                                    </center>
                                </Carousel.Item>
                                <Carousel.Item interval={6000}>
                                    <center>
                                        <div className="textbodyx">
                                            <div>
                                                <Image src={loginimagethree} fluid />
                                            </div>
                                            <div>
                                                <h4 className="headingloginx">Business activities at your <span style={{ color: "#58A0DF" }}>finger tips</span></h4>
                                                <p className="paragraphloginx"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Lorem cras habitasse donec arcu enim eu, justo, nunc nulla.
                                                    Mauris turpis ut est est quis sed praesent. Nulla integer risus
                                                    dolor enim at nulla. Nunc non egestas vitae quis turpis ut est est
                                                    quis sed praesent. Nulla integer risus dolor .
                                                </p>
                                            </div>
                                        </div>
                                    </center>
                                </Carousel.Item>
                            </Carousel>
                        </div>

      </div>
    );
  }
}

export default CarouselPage;