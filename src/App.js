import React from 'react';
import './resources/styles.css';
import './components/header_footer/Header'
import Header from "./components/header_footer/Header";
import Featured from './components/featured/index'
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import {Element} from 'react-scroll';

function App() {
    return (
        <div className="App">
            <Header/>
            <Element name="featured">
                <Featured/>
            </Element>
            <Element name="venuenfo">
                <VenueNfo/>
            </Element>
            <Element name="highlights">
                <Highlight/>
            </Element>
            <Element name="pricing">
                <Pricing/>
            </Element>
            <Location/>
            <Footer/>
        </div>
    );
}

export default App;
