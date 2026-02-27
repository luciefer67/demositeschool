import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, GraduationCap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo">
                        <GraduationCap className="logo-icon text-gradient" size={32} />
                        <span className="logo-text">Nexus<span className="text-gradient">Academy</span></span>
                    </div>
                    <p className="brand-desc text-muted">
                        Empowering the next generation of leaders, thinkers, and innovators through world-class education and a supportive community.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link glass"><Facebook size={20} /></a>
                        <a href="#" className="social-link glass"><Twitter size={20} /></a>
                        <a href="#" className="social-link glass"><Instagram size={20} /></a>
                        <a href="#" className="social-link glass"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#campus">Campus Life</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Programs</h4>
                    <ul>
                        <li><a href="#">Computer Science</a></li>
                        <li><a href="#">Biotech & Sciences</a></li>
                        <li><a href="#">Arts & Design</a></li>
                        <li><a href="#">Advanced Mathematics</a></li>
                        <li><a href="#">Extracurriculars</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li>
                            <MapPin size={20} className="text-primary" />
                            <span>123 Innovation Drive, Tech Valley, TX 75001</span>
                        </li>
                        <li>
                            <Phone size={20} className="text-primary" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <Mail size={20} className="text-primary" />
                            <span>admissions@nexusacademy.edu</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-container">
                    <p>&copy; {new Date().getFullYear()} Nexus Academy. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
