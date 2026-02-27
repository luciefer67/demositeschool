import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';
import './Stats.css';

const statsData = [
    { icon: <Users size={32} />, count: "2,500+", label: "Happy Students" },
    { icon: <BookOpen size={32} />, count: "150+", label: "Expert Courses" },
    { icon: <Award size={32} />, count: "50+", label: "Awards Won" },
    { icon: <Globe size={32} />, count: "20+", label: "Global Partners" }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid glass-card">
                    {statsData.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-icon-wrapper text-gradient">
                                {stat.icon}
                            </div>
                            <h2 className="stat-count text-gradient">{stat.count}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
