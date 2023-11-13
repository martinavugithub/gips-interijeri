import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css'; 

function Header() {
  return (
    <div>
      <Navbar />

      <div className="header-content">
        <img
          src="/images/intro-bg.jpg"
          alt="Intro Background"
        />
        <div className="centered-text">
          <h2>Gips interijeri</h2>
          <p>sve što ti treba</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
