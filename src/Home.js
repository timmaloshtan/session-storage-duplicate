import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';


function Home() {
  return (
    <div className="App">
      <App />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
      </header>
    </div>
  );
}

export default Home;
