import React from 'react';
import { Link } from 'react-router-dom';
import Destinations from '../Home/Destinations/Destinations';
import './About.css';
const About = () => {
    return (
        <div className="container-fluid mx-auto">
            <div className="features-bg  margin1">
                <h1>ABOUT US</h1>
                <p><Link to="/home"></Link></p>
            </div>
            <div className="row container mt-5">
                <div className="col-lg-7 pe-5">
                    <small className="text text-danger">ABOUT TRAVESIA</small>
                    <h1 >World Best Travel   <br /><span className="text text-danger" >Company Since 2008.</span></h1>
                    <small>It is built for travel agencies, company, tour operators firms, adventurous tours and tourism bureaus services. This top quality theme has a lot to offer: it's good looking, it uses vibrant bright colors and engaging stylish content; for your comfort, the theme has been created fully responsive, seo and 100% Retina.</small>
                    <br />
                    <button className="btn btn-dark mt-3">Find Tours</button>
                </div>
                <div className="col-lg-5 mt-5">
                    <img className="img-fluid" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/about-3.jpg" alt="" />
                </div>
            </div>
            <Destinations />
            {/* popular destination */}
            <div className="bg-dark  p-4 mt-5">
                <div className="row pt-3 text-light">
                    {/* 1st column */}
                    <div className="col-lg-3">
                        <img style={{ borderRadius: "50%", border: "15px solid white", height: '300px' }} src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/place-7.jpg" alt="" />
                        <h5 className="text-center">Mont Blanc</h5>
                    </div>
                    {/* 2nd column */}
                    <div className="col-lg-3">
                        <img className="img-fluid" style={{ borderRadius: "50%", border: "15px solid white", height: '300px' }} src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-3.jpg" alt="" />
                        <h5 className="text-center">American forest</h5>
                    </div>
                    {/* 3rd column */}
                    <div className="col-lg-3">
                        <img style={{ borderRadius: "50%", border: "15px solid white", height: '300px' }} src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/about-1.jpg" alt="" />

                        <h5 className="text-center">Mont Blanc</h5>
                    </div>
                    {/* 4th column */}
                    <div className="col-lg-3">
                        <img style={{ borderRadius: "50%", border: "15px solid white", height: "300px" }} src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/place-4.jpg" alt="" />
                        <h5 className="text-center">Norway lack</h5>
                    </div>
                </div>
            </div>
            {/* Our Team */}
            <h2>Expert Tour Guides</h2>
            <div className="container d-flex justify-content-center ">
                <div className="row">
                    <div className="card-wrapper col-lg-4">
                        {/* first guide */}
                        <div className="card card3 profile-two">
                            <div className="card-image profile-img--two">
                                <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/team-3.jpg" alt="profile two" />
                            </div>
                            <ul className="social-icons">
                                <li><a href="#"> <i className="fab fa-facebook-f"></i>
                                </a></li>
                                <li> <a href="#"><i className="fab fa-instagram"></i>
                                </a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                            <div className="details jane">
                                <h2>Mariena Buonos
                                    <br /> </h2>
                            </div>
                        </div>
                    </div>
                    {/* second guide */}
                    <div className="card-wrapper col-lg-4">
                        <div className="card card3 profile-two">
                            <div className="card-image profile-img--two">
                                <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/team-2.jpg" alt="profile two" />
                            </div>
                            <ul className="social-icons">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                            <div className="details jane">
                                <h2>Parks Missie </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;