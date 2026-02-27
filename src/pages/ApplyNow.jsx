import React from 'react';
import './PageStyles.css';

const ApplyNow = () => {
    return (
        <div className="page-container">
            <div className="container py-16 mx-auto" style={{ maxWidth: '800px' }}>
                <div className="text-center mb-10 animate-fade-in">
                    <div className="badge glass mb-4"><span>Admissions 2026-2027</span></div>
                    <h1 className="hero-title text-gradient" style={{ fontSize: '3rem', margin: 0 }}>Student Application</h1>
                    <p className="section-subtitle mt-4 mx-auto">Fill out the form below to begin your journey at Nexus Academy.</p>
                </div>

                <div className="glass-card p-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="John" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="john.doe@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="+1 (555) 123-4567" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Grade Applying For</label>
                            <select className="form-control" required style={{ appearance: 'auto', backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
                                <option value="">Select Grade</option>
                                <option value="9">Grade 9</option>
                                <option value="10">Grade 10</option>
                                <option value="11">Grade 11</option>
                                <option value="12">Grade 12</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Area of Interest (Optional)</label>
                            <select className="form-control" style={{ appearance: 'auto', backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
                                <option value="">Select Primary Interest</option>
                                <option value="physics">Physics & Engineering</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology & Pre-Med</option>
                                <option value="cs">Computer Science</option>
                                <option value="arts">Arts & Humanities</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Why do you want to join Nexus Academy?</label>
                            <textarea className="form-control" placeholder="Tell us about yourself and your goals..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-full flex justify-center mt-4">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyNow;
