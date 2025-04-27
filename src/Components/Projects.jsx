import React from "react";
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-section">
            <h1>Projects</h1>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
                <li><strong>Portfolio Website:</strong> A personal website showcasing my skills and work experience.</li>
                <li><strong>Secure Login System:</strong> Developed a secure user authentication system using Node.js and JWT.</li>
                <li><strong>Responsive Blog:</strong> Created a blog platform with responsive design using HTML, CSS, and JavaScript.</li>
                <li><strong>Team Collaboration Tool:</strong> Worked on a web app for task management and team communication.</li>
            </ul>
        </div>
    );
};

export default Projects;
