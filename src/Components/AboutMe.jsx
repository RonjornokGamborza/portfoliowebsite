import React from "react";
import './AboutMe.css';
import pic from '../Assets/photo_2024-12-04_00-12-54-removebg-preview.png';

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <img src={pic} alt='pic of me' className="pic" />
            <div className="headers">
                <h1>About Me</h1>
                <p>Hello! I'm Reniel P. Bontoc, a student in Dalubhasaan ng Lungsod ng Lucena and a passionate Web<br /> Developer and Security Specialist. With a keen interest in creating visually appealing and secure web applications, I am constantly exploring new technologies to deliver innovative solutions. I thrive on <br />solving complex problems and collaborating with teams to achieve goals. When I am not coding, you’ll <br /> find me exploring new tools, reading about the latest tech trends, or enjoying a good cup of coffee! and <br /> this is my official portfolio website to showcase all of my details, skills, work experience, projects, and <br /> contacts in web development.</p>
                <h1>Skills & Work Experience</h1>
                <div className="skills">
                    HTML, CSS, JavaScript<br />
                    Responsive Web Design<br />
                    Basic Backend Development<br />
                    Team Collaboration & Project Management<br />
                    Future Goal: Full-Stack Web Developer
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
