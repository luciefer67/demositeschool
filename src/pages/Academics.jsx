import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import './PageStyles.css';

const Academics = () => {
    return (
        <div className="page-container">
            <div className="page-header" style={{ backgroundImage: `url(/images/classroom.png)` }}>
                <div className="overlay overlay-dark"></div>
                <div className="container relative z-10 text-center animate-fade-in">
                    <h1 className="hero-title text-gradient">Outstanding Academics</h1>
                    <p className="section-subtitle mt-4 mx-auto max-w-2xl">
                        A challenging, innovative curriculum that pushes boundaries and prepares students for tomorrow's world.
                    </p>
                </div>
            </div>

            <div className="container py-16">
                <div className="grid grid-cols-3 gap-8 mb-16">
                    <div className="glass-card p-10 text-center hover:translate-y-[-5px] transition-all">
                        <BookOpen size={48} className="text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">AP Courses</h3>
                        <p className="text-muted">Over 25+ Advanced Placement courses covering sciences, arts, and humanities.</p>
                    </div>
                    <div className="glass-card p-10 text-center hover:translate-y-[-5px] transition-all">
                        <GraduationCap size={48} className="text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">College Prep</h3>
                        <p className="text-muted">Dedicated counselors to guide students to top-tier universities worldwide.</p>
                    </div>
                    <div className="glass-card p-10 text-center hover:translate-y-[-5px] transition-all">
                        <Award size={48} className="text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3">Honors Society</h3>
                        <p className="text-muted">A dedicated honors track for exceptional students striving for academic excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
