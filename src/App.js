import React from 'react';
import './resources/styles.css';
import './components/header_footer/Header'
import Header from "./components/header_footer/Header";
import Featured from './components/featured/index'

function App() {
  return (
    <div className="App" style={{height: "1500px", background: 'red' }}>
        <Header/>
        <Featured/>
    </div>
  );
}

export default App;
