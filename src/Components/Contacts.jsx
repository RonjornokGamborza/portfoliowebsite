import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import './Contacts.css';

const Contacts = () => {
    return (
        <>
            <div className="contacts-section">
                <h1>Contact Me</h1>

                <div className="contact-item">
                    <FaEnvelope className="icon" />
                    <a href="mailto:padilloreniel178@gmail.com">padilloreniel178@gmail.com</a>
                </div>

                <div className="contact-item">
                    <FaPhoneAlt className="icon" />
                    <span>+63 961 737 1876</span>
                </div>

                <p className="follow-text">Follow me on:</p>

                <div className="socials">
                    <div className="social-item">
                        <FaFacebook className="icon" />
                        <span>Reniel Padillo Bontoc</span>
                    </div>
                    <div className="social-item">
                        <FaInstagram className="icon" />
                        <span>_basangburger</span>
                    </div>
                </div>
            </div>

            <footer className="footer">&copy; 2024 Reniel's Portfolio. All Rights Reserved.</footer>
        </>
    );
};

export default Contacts;
