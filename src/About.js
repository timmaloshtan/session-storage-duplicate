import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';

function About() {
  return (
    <div className="App">
      <App />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          About
        </p>
      </header>
    </div>
  );
}

export default About;
