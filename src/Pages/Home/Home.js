import React from 'react';
import Gallary from '../Gallary/Gallary';
import Gallary1 from '../Gallary/Gallary1/Gallary1';
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
            <Gallary></Gallary>
            <Destinations></Destinations>
            <Offers></Offers>
            <Gallary1></Gallary1>
        </div >
    );
};

export default Home;