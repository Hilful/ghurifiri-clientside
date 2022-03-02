import React from 'react';
import { Fade } from 'react-reveal';
import './Gallery.css';
const Gallery = () => {
    return (
        <div className="container-fluid">
            
            <Fade left> 
             <div className="row mt-5 mb-5">
                <div className="col-lg-5">
                    <div className="img-position img-hover-zoom ">
                    <Fade left> 
                        <img style={{
                            height: '800px'
                        }} src="http://travesia.axiomthemes.com/wp-content/uploads/2017/10/tour7-1000x658.jpg" className="img-fluid" alt="" />
                        </Fade>
                        <div className="text-position">
                            <h2 >Spain Countryside Tour</h2>
                            <button className="btn btn-danger ms-5">View Site</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-2">
                    <div className="img-position img-hover-zoom ">
                    <Fade left> 
                        <img style={{
                            height: '400px'
                        }} className="img-fluid" src="http://html.cwsthemes.com/suntour/pic/slider-info-3.jpg" alt="" />
                        </Fade>
                        <div className="text-position1">
                            <p>Vienna All Through</p>
                            <button className="btn  btn-danger">View Site</button>
                        </div>
                    </div>
             
                    <div >
                       <div className="img-position img-hover-zoom ">
                       <Fade left> 
                       <img style={{
                            height: '380px',
                            marginTop: '20px'
                        }} className="img-fluid" src="http://html.cwsthemes.com/suntour/pic/portfolio/285x285-1.jpg" alt="" />
                     </Fade>
                     <div className="text-position1">
                            <p>Vienna All Through</p>
                            <button className="btn  btn-danger">View Site</button>
                        </div>
                       </div>
                    </div>
                </div>
                       {/* 3rd column */}
                <div className="col-lg-4 ">
                    <div className="img-position img-hover-zoom ">
                    <Fade left> <img style={{
                            height: '400px'
                        }} className="img-fluid" src="http://travesia.axiomthemes.com/wp-content/uploads/2017/10/tour12-1000x658.jpg" alt="" />
                        </Fade>
                         <div className="text-position1">
                            <p>Vienna All Through</p>
                            <button className="btn  btn-danger">View Site</button>
                        </div>
                    </div>

                    <div className="hot-deals" style={{
                        height: '380px',
                        marginTop: '20px'
                    }}>
                        <i className="fa-3x far fa-clock"></i>
                        <h3>Our Hot Deals</h3>
                        <small>Save upto 50% on all trips</small>
                    </div>
                </div>
            </div>

            </Fade>
        </div>
    );
};

export default Gallery;