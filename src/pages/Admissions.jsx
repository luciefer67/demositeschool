import React from 'react';
import { Calendar, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Admissions = () => {
    return (
        <div className="page-container">
            <div className="page-header" style={{ backgroundImage: `url(/images/hero.png)` }}>
                <div className="overlay overlay-dark"></div>
                <div className="container relative z-10 text-center animate-fade-in">
                    <h1 className="hero-title text-gradient">Join Our Community</h1>
                    <p className="section-subtitle mt-4 mx-auto max-w-2xl">
                        Take the first step towards a transformative educational experience.
                    </p>
                </div>
            </div>

            <div className="container py-16 grid grid-cols-2 gap-12 items-start" style={{ alignItems: 'start' }}>
                <div className="glass-card p-10">
                    <h2 className="text-3xl font-bold mb-6">Admissions Process</h2>

                    <div className="mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="icon-badge p-3 mt-1 bg-primary/20 text-primary" style={{ border: 'none' }}><FileText size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">1. Submit Application</h4>
                                <p className="text-muted">Complete the online application form with required transcripts and recommendation letters.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="icon-badge p-3 mt-1 bg-secondary/20 text-secondary" style={{ border: 'none' }}><Calendar size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">2. Interview & Assessment</h4>
                                <p className="text-muted">Selected candidates will be invited for a campus visit and a friendly interview.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="icon-badge p-3 mt-1 bg-accent/20 text-accent" style={{ border: 'none' }}><CheckCircle size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">3. Enrollment Decision</h4>
                                <p className="text-muted">Receive your admission decision and secure your spot at Nexus Academy.</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/apply-now" className="btn btn-primary w-full p-4 text-center flex justify-center">Start Your Application Now</Link>
                </div>

                <div className="glass-card p-10 bg-gradient-to-br from-slate-900/80 to-slate-800/80">
                    <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
                    <ul className="text-muted leading-relaxed space-y-4 mb-8">
                        <li className="flex justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="font-bold text-main">Early Decision Deadline</span>
                            <span>November 15, 2026</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="font-bold text-main">Regular Decision Deadline</span>
                            <span>January 15, 2027</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-3 mb-3">
                            <span className="font-bold text-main">Financial Aid Application</span>
                            <span>February 1, 2027</span>
                        </li>
                        <li className="flex justify-between pb-3">
                            <span className="font-bold text-main">Decision Notification</span>
                            <span>March 31, 2027</span>
                        </li>
                    </ul>

                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                        <h4 className="font-bold text-primary mb-2">Need Assistance?</h4>
                        <p className="text-sm text-muted">Our admissions team is here to help! Contact us at admissions@nexusacademy.edu or call +1 (555) 123-4567.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
