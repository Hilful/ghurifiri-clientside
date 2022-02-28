import React from 'react';
import { Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Banner';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ height: "600px" }} interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1YNX0K0/1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="padding">
                        <Fade right>
                            <h3 className="display-4 text text-bold text-light">Discover Ancient Sonargaon</h3>
                        </Fade>
                        <Fade left>
                        <button className="btn btn-light rounded-pill mt-3">Book Us</button>
                        </Fade>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{ height: "600px" }} interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fYD4QXK/2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="padding">
                        <Fade right>
                            <h1 className="display-4 text text-bold text-light">Explore the land of Rivers</h1>
                        </Fade>
                        <Fade left>
                        <button className="btn btn-light rounded-pill mt-3">Book Us</button>
                        </Fade>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "600px" }}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/KKsZFqG/3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="padding">
                        <Fade right>
                            <h3 className="display-4 text text-bold text-light">Do not miss the place where sun shines brightest from the peaks of mountains</h3>
                        </Fade>
                        <Fade left>
                            <button className="btn btn-light rounded-pill mt-3">Book Us</button>
                        </Fade>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default Banner;