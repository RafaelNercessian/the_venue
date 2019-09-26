import React from 'react';
import './resources/styles.css';
import './components/header_footer/Header'
import Header from "./components/header_footer/Header";
import Featured from './components/featured/index'
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
function App() {
  return (
    <div className="App">
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Highlights/>
    </div>
  );
}

export default App;
