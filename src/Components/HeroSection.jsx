import React, { useState } from 'react'; // ⬅ import useState
import './HeroSection.css';
import logo from '../Assets/Screenshot 2024-12-03 104046.png'
import pic from '../Assets/SPCCRFT LANDSCAPE.zip - 18(1)(1).png'

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="hero">
            <nav>
                <img src={logo} alt="Logo" className='logo' />
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#about-skills" onClick={closeMenu}>ABOUT ME</a>
                    <a href="#about-skills" onClick={closeMenu}>SKILL & WORK EXPERIENCE</a>
                    <a href="#projects" onClick={closeMenu}>PROJECTS</a>
                    <a href="#contacts" onClick={closeMenu}>CONTACTS</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>

            <div className='details'>
                <div className="details-content">
                    <div className="text">
                        <h1>Hello! My name is <span className="highlight">Reniel</span></h1>
                        <p>I'm a based Web Developer and Security Specialist focused on <br />
                            clean & user-friendly experiences, I am a passionate about building <br />
                            excellent software that improves the lives of those around me.</p>
                    </div>
                    <img src={pic} alt='pic_hero' className='pichero' />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
