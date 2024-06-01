import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/indraneel24" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/indraneelbhattacharjee" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="mailto:indraneelbhattacharjee24@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
            <ul className="list">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education & Experience</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <p className="copyright">
                © Indraneel Bhattacharjee | All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
