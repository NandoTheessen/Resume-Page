import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio row' >
            <div className="project">
                <Link target="_blank" className='image-link' to='//cocky-perlman-0a91d4.netlify.com'><img className='project-screen' src={require('../pics/notes.jpg')} alt="notes app login screen" /></Link>
                <div className="project-description-container">
                    <h4 className='project-title'>Easy Notes</h4>
                    <h6 className='project-subtittle'>A feature-rich Notes App for everyone.</h6>
                    <p className="project-description">Front-End Built using React, React-Router & Semantic-UI</p>
                    <p className="project-description">Back-End leveraging Node.js / Express</p>
                </div>
            </div>
            <div className='portfolio-bottom-border'></div>
        </div>
    );
};

export default Portfolio;