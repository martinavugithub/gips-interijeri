import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className={`nav ${isSticky ? 'sticky' : ''}`}>
      <li className="nav-list-item ml-auto">
        <a className="navbar-brand" href="#">
          Gips Interijeri
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about-us">
          O nama
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services">
          Usluge
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#clients">
          Klijenti
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">
          Kontakt
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
