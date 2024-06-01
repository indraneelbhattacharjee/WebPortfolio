import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
    const [displayText, setDisplayText] = useState('');
    const [showButton, setShowButton] = useState(false);
    const fullText = `
        
                                                            Indraneel Bhattacharjee  
indraneelbhattacharjee24@gmail.com |  916 - 530 - 8224 | Sacramento, CA 95819

SUMMARY

Aspiring Software Engineer with a strong programming background in Python, web development, 
software, and network engineering. Experienced in developing and maintaining web applications, 
troubleshooting complex issues, and collaborating with cross-functional teams. 
Seeking to leverage my skills in a dynamic and innovative environment.

EDUCATION

California State University, Sacramento  						              	          
January 2022 -  July 2024 
Bachelor of Science in Computer Science  
Dean’s Honor List. Completed 4 year degree program in a record breaking time of  2.5 years

TECHNICAL SKILLS

Programming Languages: Python, C, C++, Java, JavaScript, HTML, JSON, SQL, Jinja2, GraphQL
Web Development: HTML, CSS, Flask, Django, React, Framer Motion, JavaScript, ThreeJS, Typescript
Operating Systems: Windows, Kali Linux, Ubuntu, Parrot OS, MacOS
Cloud Environments: AWS, GCP
Networking: VLAN, TCP/IP, STP, ARP, Ethernet, DHCP, OSPF, BGP, IPSEC, CCNA (equivalent)
Tools: Ansible, Splunk, Observium, Grafana, Git (BitBucket & GitHub), VMware/VirtualBox, WireShark, Jenkins

PROJECTS

Technical Leadership Project:

Project Lead, ​​Infrastructure Development for Bay Develops 			          
August 2023 - August 2024       
Led a team of 7 to develop a full-service interactive website using React, Node.js, Stripe API, and Auth0
Implemented features including seamless transactions and an interactive chatbot
Managed project scope, coordinated team activities, actively participated in code reviews 
and ensured teamwork spirit while maintaining  timely delivery with positive client feedback

Self Learning Projects:
   
Portfolio Website 								   
March 2024 - Present  
Developed a personal portfolio website using HTML, CSS, and JavaScript and Framer Motion
Showcases web development skills, education, professional projects, skills, and experience
 
Flask Web Application for Google Docs Automation 			        	          
February 2024 -  April 2024 
Created a web application using Flask that accepts prompts and types them into Google Docs
Implemented user authentication and real time document updates
Enhanced user experience with a clean and responsive interface

Open-Source Contribution Projects:

Custom Secure Linux Memory Allocator with C					
March 2024 - April 2024   
Developed a custom memory allocator enhancing system performance and security
Implemented vulnerability testing with tools like Valgrind and GDB
Achieved 20% improvement in allocation efficiency and mitigated critical vulnerabilities

Wisconsin Process  Shell OSTEP Project with C				          
february 2024 - March 2024
Developed a command line shell interpreter in C Integrating advanced process and memory management
Enhanced shell performance by 40%

UNIX - Inspired CommandLine Utilities Enhancement Project 		       
January 2024 - February 2024
Developed UNIX command line utilities enhancing system functionality
Engineered tools mimicking cat, grep, zip, unzip with 30% speed improvement

PROFESSIONAL EXPERIENCE
Network Engineer Intern, CrowdStrike Inc, Sunnyvale, CA 				  
May 2023 - August 2023       
Developed Python script for network device connections, integrating over 35 devices
Automated device onboarding with Ansible, reducing errors by 30% and setup time by 50%
Created Jinja2 templates for remote switch configurations, expediting deployment by 40%
Enhanced network monitoring with Grafana and Prometheus, improving visibility by 70%

Research Assistant  AI and Machine Learning, CSUS, Sacramento, CA 			 
January 2024 - May 2024
Conducted research on NLP and AI, focusing on sentiment analysis and language translation, contributing to 3 major projects
Developed machine learning algorithms using Python, TensorFlow, and ScikitLearn, improving model accuracy by 15%

    `;
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(timer);
                setShowButton(true);
            }
        }, 2.5);
        return () => clearInterval(timer);
    }, []);

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        }
    };

    return (
        <section className="resume" id="resume">
            <div className="video-background">
                <video autoPlay muted loop id="bg-video">
                    <source src="/resumebg.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="video-overlay"></div>
            </div>
            <div className="resume-content">
                <pre>{displayText}</pre>
                {showButton && (
                    <motion.a 
                        href="/Indraneel_Bhattacharjee_Resume.pdf" 
                        download 
                        className="download-button" 
                        initial="hidden" 
                        animate="visible" 
                        variants={buttonVariants}
                    >
                        Download Resume
                    </motion.a>
                )}
            </div>
        </section>
    );
};

export default Resume;