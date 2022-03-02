import TextField from '@mui/material/TextField';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Destinations.css';
const Destinations = () => {
    return (
        <div className="container-fluid">
            <Fade bottom>
                <div className="text-dark text-center m-5 text">
                    <h2 className="text-bold"><span className="text-danger ">Popular Tourism </span> Spots</h2>
                    <small>Wonder into the wilderness</small>
                </div>
            </Fade>
            <Fade bottom>
                {/* row start */}
                <Row lg={2} sm={1}>
                    <Col>
                        <div className="tour-bg container-fluid">
                            <div className="padding">
                                <h6 className="title1">Sign up for <br /> <span>Our Newsletter</span></h6>
                                 <br /> <br />
                                <TextField label="Your Name" variant="standard"
                                    color="warning" focused /> <br />
                                <TextField label="Your Email Address" variant="standard" color="warning" focused /> <br />
                                <button className="btn btn-danger rounded-pill mt-4">Subscribe</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h2>Popular Spots in Bangladesh</h2>
                        <small>Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways</small>
                        <Row lg={2} className="mt-4">
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" , height: "40px",width :"40px"}} src="https://i.ibb.co/jMdz7D9/5.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Inani</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>
                            <Col className="d-flex">
                                <div >
                                    <img style={{  borderRadius: "50%" , height: "40px",width :"40px" }} src="https://i.ibb.co/x8qRJqw/6.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Saintmartin</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>

                        </Row>
                        <Row lg={2} className="mt-5">
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" , height: "40px",width :"40px" }} src="https://i.ibb.co/N33yyvK/7.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Buriganga</h5>
                                    <Link to="/tours" className="navDesign text-primary">View all tours</Link>
                                </div>
                            </Col>
                            <Col className="d-flex">
                                <div >
                                    <img style={{ borderRadius: "50%" , height: "40px",width :"40px"}} src="https://i.ibb.co/QMhjtvw/8.jpg" alt="" />
                                </div>
                                <div className="ps-3">
                                    <h5>Jaflong</h5>
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