import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-container' >
            <a className='symbol-link' href="https://twitter.com/CodesNando"><i className="fab fa-twitter-square fa-2x"></i></a>
            <a className='symbol-link' href="https://www.linkedin.com/in/nandotheessen/?locale=en_US"><i className="fab fa-linkedin fa-2x"></i></a>
            <a className='symbol-link' href="https://github.com/NandoTheessen"><i class="fab fa-github-square fa-2x"></i></a>
        </div>
    );
};

export default Footer;