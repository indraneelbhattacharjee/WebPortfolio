import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="img/aboutpic.png" alt="Profile" />
            </div>
            <div className="about-content">
                <h2 className="heading">ABOUT <span>Me</span></h2>
                <h3>Software Engineer</h3>
                <p>Driven by a deep interest in artificial intelligence and machine learning, I create cutting-edge solutions that transform data into actionable insights. My expertise lies in developing advanced algorithms and systems that enhance efficiency and drive innovation. I have a vision of building security using AI to protect and empower businesses and individuals in the digital age.</p>
                <a href="#contact" className="btn">Hire</a>
            </div>
        </section>
    );
};

export default About;
