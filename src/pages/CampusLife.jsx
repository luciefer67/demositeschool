import React from 'react';
import { Users, Music, Trophy } from 'lucide-react';
import './PageStyles.css';
import Gallery from '../components/Gallery';

const CampusLife = () => {
    return (
        <div className="page-container">
            <div className="page-header" style={{ backgroundImage: `url(/images/events.png)` }}>
                <div className="overlay overlay-dark"></div>
                <div className="container relative z-10 text-center animate-fade-in">
                    <h1 className="hero-title text-gradient">Vibrant Campus Life</h1>
                    <p className="section-subtitle mt-4 mx-auto max-w-2xl">
                        Beyond academics, Nexus Academy provides a rich environment for personal growth and community engagement.
                    </p>
                </div>
            </div>

            <div className="container py-16">
                <div className="glass-card p-10 mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-gradient">Student Life at Nexus</h2>
                    <p className="text-lg text-muted mb-8 leading-relaxed">
                        Our campus is always buzzing with activity. From our state-of-the-art sports complex to our annual cultural festivals, students have every opportunity to explore their passions outside the classroom.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                            <Trophy className="text-secondary mb-4" size={32} />
                            <h4 className="font-bold mb-2">Athletics</h4>
                            <p className="text-sm text-muted">20+ varsity teams and intramural sports.</p>
                        </div>
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                            <Music className="text-accent mb-4" size={32} />
                            <h4 className="font-bold mb-2">Arts & Drama</h4>
                            <p className="text-sm text-muted">Award-winning theater programs and bands.</p>
                        </div>
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-white/5">
                            <Users className="text-primary mb-4" size={32} />
                            <h4 className="font-bold mb-2">Clubs</h4>
                            <p className="text-sm text-muted">Over 50 student-led clubs and organizations.</p>
                        </div>
                    </div>
                </div>

                <Gallery />
            </div>
        </div>
    );
};

export default CampusLife;
