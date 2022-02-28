import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Contact.css'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
mapboxgl.accessToken = 'pk.eyJ1IjoidG9ubmlha3RlciIsImEiOiJja3V6bDIyMjAxMTEwMm5xd2dqeHV2ZHB1In0.WE5QDC8-RZ2dxCbjcIBZaQ';
const Contact = () => {
    // useEffect for map
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13
        });
        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div className='container-fluid mb-5'>
            <div className="features-bg margin1">
                <h1>CONTACT US</h1>
                <p><Link to="/home">HOME</Link> /OUR FEATURES</p>
            </div>
            {/* contact form and map */}
            <Row lg={2} className='mt-5 mb-5'>
                <Col xm={12} md={12}>
                    <Card className="maps">
                        <div id="map"></div>
                    </Card>
                </Col>
                <Col xm={12} md={12}>
                    <section className="mb-4">
                        <h2 className="h1-responsive font-weight-bold text-center ">Contact us</h2>
                        <div className="row">
                            <div className="col-md-12 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control" />
                                                <label for="name" className="">Your name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control" />
                                                <label for="email" className="">Your email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="subject" name="subject" className="form-control" />
                                                <label for="subject" className="">Subject</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                                <label for="message">Your message</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center text-md-left">
                                    <button className="btn btn-danger">Submit</button>
                                </div>
                                <div className="status"></div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;