import React from 'react';
import { Fade } from 'react-reveal';
import './Gallery1.css';
const Gallery1 = () => {
    return (
        <div>
            <h2 className="text-center mt-5">Hotels <span className="text-danger">Booking Open Now</span></h2>

            <div className="container container1">
                {/*  </Fade> */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="content"> <a href="#">
                            <div className="content-overlay"></div>

                            <Fade right>
                                <img className="content-image" src="https://i.imgur.com/7cNRozs.jpg" />
                            </Fade>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Holiday Hotel</h3>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Cox's Bazar</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content"> <a href="#">
                            <div className="content-overlay"></div> 
                            <Fade right> 
                            <img className="content-image" src="https://i.imgur.com/CS59IJZ.jpg" />
                            </Fade>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Shajek Valley Hotel</h3>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Bandarban</p>
                            </div>
                        </a> </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content"> <a href="#">
                            <div className="content-overlay"></div> 
                            <Fade right> 
                            <img className="content-image" src="https://i.imgur.com/LITAKvq.jpg" />
                            </Fade>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Honeymoon Lodge</h3>
                                <p className="content-text"><i className="fa fa-map-marker"></i> Sylhet</p>
                            </div>
                        </a> </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery1;