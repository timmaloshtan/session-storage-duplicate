import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';

function Users() {
  return (
    <div className="App">
      <App />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Users
        </p>
      </header>
    </div>
  );
}

export default Users;
