import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Destinations.css'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
const Destinations = () => {
    return (
        <div className="container-fluid">
            <Fade bottom>
                <div className="text-dark text-center m-5 text">
                    <h2 className="text-bold"><span className="text-danger ">Popular Tourism </span> Countries</h2>
                    <small>Travelling across the is now much easier and fun</small>
                </div>
            </Fade>
            <Fade bottom>
                {/* row start */}
                <Row lg={2} sm={1}>
                    <Col>
                        <div className="tour-bg container-fluid">
                            <div className="padding">
                                <h6 className="title1">Sign up for <br /> <span>Our Newslater</span></h6>
                                <small>But I must explain to you how all this <br /> istaken idea of denouncing.</small> <br /> <br />
                                <TextField label="Your Name" variant="standard"
                                    color="warning" focused /> <br />
                                <TextField label="Your Email Address" variant="standard" color="warning" focused /> <br />
                                <button className="btn btn-danger rounded-pill mt-4">Subscribe</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h2>Popular Tourism Countries</h2>
                        <small>The World Tourism rankings are compiled by the United Nations World Tourism Organization as part of their World Tourism Barometer publication, which is released three times throughout the year.</small>
                        <Row lg={2} className="mt-4">
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" }} src="http://travesia.axiomthemes.com/wp-content/uploads/2017/10/tour2-90x90.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Asia</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" }} src="http://travesia.axiomthemes.com/wp-content/uploads/2017/10/tour6-90x90.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Norway</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>

                        </Row>
                        <Row lg={2} className="mt-5">
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" }} src="http://travesia.axiomthemes.com/wp-content/uploads/2017/10/tour1-90x90.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Switzerland</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" }} src="http://travesia.axiomthemes.com/wp-content/uploads/2017/09/tour-6-90x90.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Thailand</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>

                        </Row>



                    </Col>






                </Row>
            </Fade>
        </div>
    );
};
export default Destinations;