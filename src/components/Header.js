import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Indraneel Bhattacharjee</div>
            <nav className={isMenuOpen ? 'navbar active' : 'navbar'}>
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="education" smooth={true} duration={500}>Education</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                <Link to="resume" smooth={true} duration={500}>View Resume</Link>
                <a href="/Indraneel_Bhattacharjee_Resume.pdf" download>Download Resume</a>
            </nav>
            <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
                <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </header>
    );
};

export default Header;
