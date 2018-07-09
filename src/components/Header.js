import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { stack as Menu } from 'react-burger-menu'

const Header = (props) => {

    return (
        <div className='header'>
            <Link to='/'><h1>NANDO THEESSEN</h1></Link>
            <Menu right width={192}>
                <Link className="menu-item" to='/portfolio'><i className="fas fa-project-diagram"></i><span>PORTFOLIO</span></Link>
                <Link className="menu-item" to='/resume'><i class="far fa-file"></i><span>RESUME</span></Link>
                <Link className="menu-item" to='/publications'><i class="fas fa-flask"></i><span>PUBLICATIONS</span></Link>
                <Link className="menu-item" to='/education'><i class="fas fa-graduation-cap"></i><span>EDUCATION</span></Link>
                <Link className="menu-item" to='/skills'><i class="fas fa-cogs"></i><span>SKILLS</span></Link>
                <Link className="menu-item" to='/contact'><i class="far fa-envelope-open"></i><span>CONTACT</span></Link>
            </Menu>
            <nav className='over768' >
                <Link className='navLink' to='/portfolio'><span>PORTFOLIO</span></Link>
                <Link className='navLink' to='/resume'><span>RESUME</span></Link>
                <Link className='navLink' to='/publications'><span>PUBLICATIONS</span></Link>
                <Link className='navLink' to='/education'><span>EDUCATION</span></Link>
                <Link className='navLink' to='/skills'><span>SKILLS</span></Link>
                <Link className='navLink' to='/contact'><span>CONTACT</span></Link>
            </nav>
        </div>
    );
};



export default Header;