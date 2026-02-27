import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="hero-section" id="home">
            <div className="hero-background">
                <img src="/images/hero.png" alt="School Campus" className="hero-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-content animate-fade-in">
                    <div className="badge glass">
                        <span>✨ Education for the Future</span>
                    </div>

                    <h1 className="hero-title">
                        Empowering <span className="text-gradient">Innovators</span> <br />
                        of Tomorrow
                    </h1>

                    <p className="hero-description text-muted">
                        Experience world-class education in a modern environment with state-of-the-art facilities, dedicated faculty, and a vibrant community. Your journey to excellence starts here.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">
                            Explore Programs <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-outline btn-lg glass btn-play">
                            <Play size={20} className="text-gradient" /> Take a Virtual Tour
                        </button>
                    </div>
                </div>

                <div className="hero-floating-card glass-card">
                    <div className="card-header">
                        <div className="pulse-dot"></div>
                        <span>Admissions Open 2026</span>
                    </div>
                    <h3>Join the Nexus Community</h3>
                    <p>Secure your spot in the most innovative high school.</p>
                    <button onClick={() => setIsFormOpen(true)} className="btn btn-primary small-btn">Apply Today</button>
                </div>
            </div>
            {isFormOpen && (
                <div className="modal-overlay animate-fade-in" onClick={() => setIsFormOpen(false)}>
                    <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsFormOpen(false)}>
                            <X size={24} />
                        </button>
                        <div className="modal-header">
                            <h3 className="modal-title">Apply to Nexus</h3>
                            <p className="modal-subtitle">Take the first step towards your future.</p>
                        </div>
                        <form className="apply-form" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); setIsFormOpen(false); }}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Program of Interest</label>
                                <select required className="form-input" defaultValue="">
                                    <option value="" disabled>Select a program</option>
                                    <option value="science">Sciences & Engineering</option>
                                    <option value="arts">Arts & Humanities</option>
                                    <option value="business">Business & Economics</option>
                                    <option value="technology">Technology & Computer Science</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit Application</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
