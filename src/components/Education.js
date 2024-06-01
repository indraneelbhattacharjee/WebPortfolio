import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="education education-bg" id="education">
            <h2 className="heading">Education & Experience</h2>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">January 2022 - May 2024</div>
                    <div className="timeline-content">
                        <h3>University Graduate</h3>
                        <p>
                            Earned a Bachelor of Science in Computer Science from California State University - Sacramento in a record-breaking time of 2.5 years, securing a position on the Dean's Honor List. Relevant coursework included Data Structures and Algorithm Analysis, Computer Software Engineering, Object-Oriented Computer Graphics Programming, Database Management Systems, Computability and Formal Languages, Computer Organization, Computer Networking Fundamentals, and Operating System Principles. Electives focused on Modeling and Experimental Design, Data Visualization, and Software Testing and Quality Assurance, providing a comprehensive foundation in both core and specialized areas of computer science.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">September 2023 - May 2024</div>
                    <div className="timeline-content">
                        <h3>Research in AI/ML - Natural Language Processing (NLP)</h3>
                        <p>
                            Conducted a research project focused on leveraging Natural Language Processing (NLP) techniques to enhance sentiment analysis accuracy in social media posts. The project involved collecting a large dataset of tweets and user reviews, preprocessing the text data through tokenization, stemming, and lemmatization, and applying advanced machine learning algorithms, including recurrent neural networks (RNNs) and transformer models like BERT. Implemented custom feature engineering to capture context-specific nuances, significantly improving the model's ability to detect subtle sentiments. The research resulted in a sentiment analysis tool with an accuracy rate of over 90%, aiding businesses in real-time sentiment tracking and decision-making processes, ultimately leading to improved customer engagement and satisfaction.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">May 2023 – August 2023</div>
                    <div className="timeline-content">
                        <h3>Network Engineer Intern, CrowdStrike Inc, Remote (Bay Area)</h3>
                        <p>
                            Developed a Python script to connect network devices to the production infrastructure and utilized Ansible to automate device onboarding, reducing errors. Created Jinja2 templates for remote switch configurations, speeding up deployments. Utilized JSON and GraphQL for remote data fetching in Ansible playbooks and monitored traffic with Grafana and Prometheus, enhancing network performance.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">January 2021 - December 2021</div>
                    <div className="timeline-content">
                        <h3>Network Support Engineer - Intern, Appin Technology Labs, India</h3>
                        <p>
                            Developed Python scripts integrating with Ansible for device deployment, enhancing speed and accuracy. Employed Python, Wireshark, and tcp-dump for diagnostics in Juniper and Cisco, reducing downtime. Utilized TensorFlow and Pandas for predictive analysis in the pipeline, enhancing service reliability. Orchestrated standardized, fault-tolerant configurations using Ansible and Git in the pipeline. Seamlessly integrated Jenkins, Ansible, Prometheus, and Docker for streamlined automation in the "NetOpsCI/CD" pipeline, ensuring operational efficiency and reliability.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">January 2020 - December 2020</div>
                    <div className="timeline-content">
                        <h3>Network Administrator - Intern, Appin Technology Labs, India</h3>
                        <p>
                            Tested LANs, VLANs, WLANs, VPNs, NAT devices, and DHCP. Supported LANs, WANs, VLANs, and NAT devices. On-site and remote configuration of STP, ARP, EIGRP, OSPF, and BGP. Installed and configured network devices including routers, proxy servers, switches, WAN accelerators, DHS, and DHCP. Configured firewalls, routing, and switching to maximize network efficiency and security. Automated networks and updated software using software-defined networks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
