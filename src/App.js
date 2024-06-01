import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Resume />
            <Footer />
        </div>
    );
}

export default App;
