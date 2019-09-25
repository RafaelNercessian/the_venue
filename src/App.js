import React from 'react';
import './resources/styles.css';
import './components/header_footer/Header'
import Header from "./components/header_footer/Header";

function App() {
  return (
    <div className="App" style={{height: "1500px", background: 'red' }}>
        <Header/>
    </div>
  );
}

export default App;
