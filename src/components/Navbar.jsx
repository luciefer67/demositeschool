import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <GraduationCap className="logo-icon text-gradient" size={32} />
                    <span className="logo-text">VINDHYA<span className="text-gradient"> SONE I.C.SE. SCHOOL</span></span>
                </Link>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/campus-life">Campus Life</Link></li>
                    <li><Link to="/admissions">Admissions</Link></li>
                    <li>
                        <Link to="/apply-now" className="btn btn-primary nav-btn">Apply Now</Link>
                    </li>
                </ul>

                <button
                    className="mobile-menu-btn text-muted"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
