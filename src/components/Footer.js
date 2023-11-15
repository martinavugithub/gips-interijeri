import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footerContainer">
            <div className="iconRow">
                <a href="https://www.facebook.com/martina.t.carica?locale=hr_HR" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://github.com/martinavugithub" target="_blank" rel="noopener noreferrer" className="githubLink">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:martinavu1@gmail.com" className="githubLink">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            <div className="text-center">
                <p>© 2023 All rights reserved Martina Popović</p>
            </div>
        </div>
        </footer>

  );
}

export default Footer;
