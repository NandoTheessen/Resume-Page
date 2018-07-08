import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-container' >
            <a className='symbol-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/CodesNando"><i className="fab fa-twitter-square fa-3x"></i></a>
            <a className='symbol-link' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nandotheessen/?locale=en_US"><i className="fab fa-linkedin fa-3x"></i></a>
            <a className='symbol-link' target="_blank" rel="noopener noreferrer" href="https://github.com/NandoTheessen"><i className="fab fa-github-square fa-3x"></i></a>
        </div>
    );
};

export default Footer;