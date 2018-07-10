import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { stack as Menu } from 'react-burger-menu'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.menuOpen })
    }
    closeMenu() {
        this.setState({ menuOpen: false })
    }
    toggleMenu() {
        this.setState({ menuOpen: !this.state.menuOpen })
    }
    render() {
        return (
            <div className='header'>
                <Link to='/'><h1>NANDO THEESSEN</h1></Link>
                <Menu right width={192}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/portfolio'><i className="fas fa-project-diagram"></i><span>PORTFOLIO</span></Link>
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/resume'><i className="far fa-file"></i><span>RESUME</span></Link>
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/publications'><i className="fas fa-flask"></i><span>PUBLICATIONS</span></Link>
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/education'><i className="fas fa-graduation-cap"></i><span>EDUCATION</span></Link>
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/skills'><i className="fas fa-cogs"></i><span>SKILLS</span></Link>
                    <Link className="menu-item" onClick={() => this.closeMenu()} to='/contact'><i className="far fa-envelope-open"></i><span>CONTACT</span></Link>
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
    }
}

export default Header;