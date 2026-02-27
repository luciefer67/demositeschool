import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Code, Palette, Book, Beaker, Atom } from 'lucide-react';
import './Features.css';

const courses = [
    { icon: <Code size={24} />, title: "Computer Lab", desc: "Advanced programming, AI, and robotics in modern labs.", color: "#4F46E5", link: "/labs/computer" },
    { icon: <Microscope size={24} />, title: "Bio Lab", desc: "Hands-on learning with state-of-the-art biological equipment.", color: "#10B981", link: "/labs/bio" },
    { icon: <Beaker size={24} />, title: "Chemistry Lab", desc: "Practical experiments and modern chemical synthesis methods.", color: "#06B6D4", link: "/labs/chemistry" },
    { icon: <Atom size={24} />, title: "Physics Lab", desc: "Explore mechanics, electricity, and quantum phenomena.", color: "#F59E0B", link: "/labs/physics" },
    { icon: <Palette size={24} />, title: "Arts Studio", desc: "Fostering creativity through digital and traditional arts.", color: "#F43F5E", link: "/academics" },
    { icon: <Book size={24} />, title: "Literature Hub", desc: "Critical thinking and understanding of world cultures.", color: "#8B5CF6", link: "/academics" },
];

const Features = () => {
    return (
        <section className="section features-section" id="academics">
            <div className="container">
                <h2 className="section-title">World-Class Academics & Labs</h2>
                <p className="section-subtitle">
                    We offer an innovative curriculum designed to prepare students for the demands of the modern world, combining theoretical knowledge with practical skills in high-tech laboratories.
                </p>

                <div className="grid grid-cols-3 courses-grid">
                    {courses.map((course, idx) => (
                        <div className="course-card glass-card" key={idx}>
                            <div
                                className="course-icon-container"
                                style={{ '--course-color': course.color }}
                            >
                                {course.icon}
                            </div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc text-muted">{course.desc}</p>
                            <Link to={course.link} className="course-link">
                                Learn more <span className="arrow">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative blurred background blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </section>
    );
};

export default Features;
