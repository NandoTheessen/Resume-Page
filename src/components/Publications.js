import React from 'react';
import { Link } from 'react-router-dom';
import './Publications.css';

const Publications = () => {
    return (
        <div className='publications row' >
            <div className="publication">
                <div className="publication-description-container">
                    <h4 className='publication-title'>Scope In JavaScript</h4>
                    <h6 className='publication-subtitle'>A Brown Bag Talk for fellow students</h6>
                    <p className="publication-description">A closer look at why JS is a compiled language <br />and the way Scope can be easily understood <br /> even if you are struggling with it</p>
                </div>
                <Link target="_blank" className='image-link' to='//cocky-perlman-0a91d4.netlify.com'><img className='publication-screen' src={require('../pics/JS_BrownBag.JPG')} alt="notes app login screen" /></Link>
            </div>
        </div>
    );
};

export default Publications;