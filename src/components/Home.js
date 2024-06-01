import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const textArray = ["Software Engineer", "Network Engineer", "Web Developer", "AI/ML Engineer"];
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = 150;
        const erasingSpeed = 100;
        const delayBetweenPhrases = 2000;

        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCurrentText(prev => prev.slice(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex(prev => (prev + 1) % textArray.length);
                }
            } else {
                if (charIndex < textArray[textIndex].length) {
                    setCurrentText(prev => prev + textArray[textIndex].charAt(charIndex));
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex, textArray]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hi, I am</h3>
                <h1>Indraneel Bhattacharjee</h1>
                <h3>And I'm a <span className="text-animation">{currentText}</span></h3>
                <p>Passionate about leveraging the power of artificial intelligence to solve real-world problems. From building sophisticated computer networks to developing innovative applications, I'm dedicated to pushing the boundaries of technology and making a meaningful impact.</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/indraneel24" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/indraneelbhattacharjee" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:indraneelbhattacharjee24@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
                <a href="#about" className="btn">Read More</a>
            </div>
            <div className="home-img">
                <img src="/img/aboutpic.png" alt="Profile Image" />
            </div>
        </section>
    );
};

export default Home;
