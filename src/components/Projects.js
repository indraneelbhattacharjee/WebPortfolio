import React from 'react';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="video-background">
                <video autoPlay muted loop id="bg-video">
                    <source src="/vecteezy_enthusiastic-man-plays-an-interesting-game-on-a-laptop-at_26746689.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="projects-box overlay-content">
                <h2 className="heading">Projects</h2>
                <div className="wrapper">
                    <div className="project-item">
                        <h2>Custom Secure Linux Memory Allocator with C</h2>
                        <p><strong>Open Source Contribution</strong></p>
                        <p>Developed a custom memory allocator in C designed to enhance system performance and security, featuring advanced security mechanisms such as boundary checks and automatic memory sanitization to prevent common vulnerabilities like buffer overflow and use-after-free incidents.</p>
                        <p>Implemented a comprehensive vulnerability testing framework conducting rigorous security audits with tools like Valgrind and GDB to simulate attack scenarios and validate the resilience of the allocator against potential exploits.</p>
                        <p>Achieved significant security and performance enhancements, including a 20% improvement in allocation efficiency and successful mitigation of critical vulnerabilities, thereby bolstering system stability and security in multi-user environments.</p>
                        <p>Contributed to the security community by documenting the development process and security findings, sharing best practices in memory management and secure coding, which are pivotal for raising awareness and educating peers about robust software development.</p>
                    </div>
                    <div className="project-item">
                        <h2>Wisconsin Process - Shell OSTEP Project with C</h2>
                        <p><strong>Open Source Contribution</strong></p>
                        <p>Developed a custom command-line shell interpreter in C, implemented a robust shell capable of parsing and executing user commands, including built-in support for `cd`, `exit`, and environment variable management. This enhancement improved usability and system control for over 1,000 Unix-based systems users.</p>
                        <p>Integrated advanced process and memory management, engineered sophisticated process handling using Unix system calls (`fork`, `exec`, `wait`), and implemented dynamic environment variable adjustments. This reduced operational latency by 25% and enhanced shell responsiveness.</p>
                        <p>Enhanced output redirection capabilities, designed and deployed output redirection functionality allowing users to redirect command output to files, utilizing Unix file descriptors and system calls. This feature streamlined data management and logging processes for hundreds of daily tasks.</p>
                        <p>Optimized shell performance and reliability, performed extensive testing and debugging with tools like GDB to ensure high reliability and efficiency. Achieved a 40% enhancement in command execution speed and stability, significantly improving user experience in both interactive and batch mode operations.</p>
                    </div>
                    <div className="project-item">
                        <h2>UNIX-Inspired Command-Line Utilities Enhancement Project</h2>
                        <p><strong>Open Source Contribution</strong></p>
                        <p>Developed a collection of UNIX command-line utilities, enhancing system functionality and increasing user productivity by enabling efficient file manipulation and text processing across multiple platforms.</p>
                        <p>Engineered and optimized four core tools (mimicking `cat`, `grep`, `zip`, `unzip`) in C, focusing on performance enhancements that led to a 30% improvement in processing speeds for large datasets.</p>
                        <p>Implemented robust file I/O operations and advanced string manipulation techniques, handling over 100,000 lines of text per utility and ensuring high reliability and accuracy in data processing.</p>
                        <p>Delivered a high-performance toolset, which has been integrated into existing workflows by over 500 users, supporting extensive file operations that improve data handling and process automation by up to 50%.</p>
                    </div>
                    <div className="project-item">
                        <h2>Image Classification with Convolutional Neural Networks</h2>
                        <p><strong>Self Learning Project</strong></p>
                        <p>Created an image classification model to identify different objects in images using convolutional neural networks (CNNs), achieving a classification accuracy of 92%. This project demonstrated the ability to apply deep learning techniques to practical problems.</p>
                        <p>Collected and labeled a diverse dataset of images from various sources. Applied image augmentation techniques such as rotation, scaling, and flipping to increase the diversity and robustness of the training dataset, ensuring the model could generalize well to new data.</p>
                        <p>Designed and trained a CNN model with multiple convolutional layers, pooling layers, and fully connected layers. Implemented model evaluation metrics such as precision, recall, and F1-score to monitor performance and fine-tune the model.</p>
                        <p>Provided a reliable tool for automated image classification, applicable in areas such as quality control in manufacturing and content moderation on social media platforms. The model's high accuracy and robustness made it a valuable asset in these domains.</p>
                    </div>
                    <div className="project-item">
                        <h2>Application Development and Infrastructure Support</h2>
                        <p><strong>Self Learning Project</strong></p>
                        <p>Developed and maintained several applications using programming languages such as Python and Java. Focused on backend reliability and efficiency, ensuring the applications were robust and could handle high loads.</p>
                        <p>Worked with various infrastructure technologies, including Linux, Windows, Docker, and Kubernetes, to support large-scale production environments. This involved setting up and managing containerized applications and orchestrating them for scalability and resilience.</p>
                        <p>Wrote and maintained comprehensive technical documentation, which improved team knowledge and facilitated the smooth onboarding of new team members. The documentation covered codebases, system architecture, and operational procedures.</p>
                        <p>Contributed to the enhancement of the development and deployment process, reducing system downtime and improving the overall efficiency of the production environment.</p>
                    </div>
                    <div className="project-item">
                        <h2>Sentiments Analysis On Social Media Data</h2>
                        <p><strong>Self Learning Project</strong></p>
                        <p>Developed a sentiment analysis model to classify user sentiments (positive, negative, neutral) from social media posts, achieving an accuracy of 85%. This project involved extensive use of natural language processing (NLP) techniques and deep learning.</p>
                        <p>Collected and preprocessed large datasets of social media posts using web scraping tools and APIs. Utilized NLP techniques for text cleaning, tokenization, and lemmatization to prepare the data for modeling.</p>
                        <p>Built and trained a deep learning model using Long Short-Term Memory (LSTM) networks, which are well-suited for sequence prediction tasks such as sentiment analysis. The model was able to capture the context and sentiment of the posts accurately.</p>
                        <p>Deployed the model as a web application using Flask, allowing users to input text and receive real-time sentiment analysis. This application provided valuable insights for marketing and customer service teams, enhancing their ability to respond to user feedback effectively.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
