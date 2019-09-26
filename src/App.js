import React from 'react';
import './resources/styles.css';
import './components/header_footer/Header'
import Header from "./components/header_footer/Header";
import Featured from './components/featured/index'
import VenueNfo from "./components/venueNfo";
import Description from "./components/highlights/Description";
function App() {
  return (
    <div className="App">
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Description/>
    </div>
  );
}

export default App;
