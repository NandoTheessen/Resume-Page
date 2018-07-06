import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    function onChange(e) {
        props.history.push(`/${e.currentTarget.value}`)
    }
    return (
        <div className='header'>
            <Link to='/'><h1>NANDO THEESSEN</h1></Link>

            <nav>
                <Link className='navLink' to='/portfolio'><span>PORTFOLIO</span></Link>
                <Link className='navLink' to='/resume'><span>RESUME</span></Link>
                <Link className='navLink' to='/publications'><span>PUBLICATIONS</span></Link>
                <Link className='navLink' to='/education'><span>EDUCATION</span></Link>
                <Link className='navLink' to='/skills'><span>SKILLS</span></Link>
                <Link className='navLink' to='/contact'><span>CONTACT</span></Link>

                <select onChange={onChange} defaultValue='Navigation'>
                    <option value="">Navigation</option>

                    <option value="Portfolio">Portfolio</option>
                    <option value="Resume">Resume</option>
                    <option value="Publications">Publications</option>
                    <option value="Education">Education</option>
                    <option value="Skills">Skills</option>
                    <option value="Contact">Contact</option>
                </select>
            </nav>
        </div>
    );
};



export default Header;