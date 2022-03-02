import React from 'react';
import Gallery from '../Gallery/Gallery';
import Gallery1 from '../Gallery/Gallery1/Gallery1';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Destinations from './Destinations/Destinations';
import './Home.css';
import Offers from './Offers/Offers';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Destinations></Destinations>
            <Offers></Offers>
            <Gallery1></Gallery1>
        </div >
    );
};

export default Home;