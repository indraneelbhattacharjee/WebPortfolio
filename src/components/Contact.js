import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="video-background">
                <video autoPlay muted loop id="bg-video">
                    <source src="vecteezy_technology-hud-background_4822731.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="video-overlay"></div>
            </div>
            <div className="contact-box overlay-content">
                <h2 className="heading">Let's Connect</h2>
                <div className="contact-content">
                    <p className="animated-text">Write me at <a href="mailto:indraneelbhattacharjee24@gmail.com">
                        <i className="fa-solid fa-envelope"></i> indraneelbhattacharjee24@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
