import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Beaker, Code, Microscope, Atom } from 'lucide-react';
import '../components/Features.css';
import './PageStyles.css';

const labData = {
    computer: {
        title: "Computer Science Laboratory",
        img: "/images/labs.png",
        icon: <Code size={32} />,
        color: "#4F46E5",
        desc: "Our Computer Lab is equipped with the latest high-performance workstations, dual-monitor setups, and dedicated servers for AI research and development. Students learn cutting-edge programming, cryptography, data structures, and robotics in an environment that simulates modern tech companies.",
        features: ["Cisco Routing Equipment", "AI & Machine Learning GPU Rigs", "VR/AR Development Stations"]
    },
    bio: {
        title: "Advanced Biology Laboratory",
        img: "/images/labs.png",
        icon: <Microscope size={32} />,
        color: "#10B981",
        desc: "The Biology Lab features top-tier optical and electron microscopes, sterile hoods, and genetics analysis tools. Students have the opportunity to engage in complex bio-engineering projects and microbiology research typically reserved for university-level studies.",
        features: ["Scanning Electron Microscope", "DNA Sequencers", "Tissue Culture Facilities"]
    },
    chemistry: {
        title: "Chemical Synthesis Laboratory",
        img: "/images/labs.png",
        icon: <Beaker size={32} />,
        color: "#06B6D4",
        desc: "Safety meets innovation in our Chemistry Lab. With modern fume hoods, precision measuring instruments, and a vast array of chemical agents, students perform both classic titration experiments and advanced organic synthesis under expert supervision.",
        features: ["Digital Spectrophotometers", "Rotary Evaporators", "Advanced Fume Hoods"]
    },
    physics: {
        title: "Quantum & Mechanics Physics Lab",
        img: "/images/labs.png",
        icon: <Atom size={32} />,
        color: "#F59E0B",
        desc: "The Physics Lab provides hands-on exploration of the laws governing our universe. From exploring kinematics with air tracks and photonics equipment to building electromagnetic accelerators, students test theories through rigorous experimentation.",
        features: ["Laser Optics Benches", "Wind Tunnels", "Particle Detectors"]
    }
};

const LabPage = () => {
    const { labId } = useParams();
    const lab = labData[labId] || labData.computer;

    return (
        <div className="page-container" style={{ '--theme-color': lab.color }}>
            <div className="page-header" style={{ backgroundImage: `url(${lab.img})` }}>
                <div className="overlay overlay-dark"></div>
                <div className="container relative z-10 text-center animate-fade-in">
                    <div className="flex-center mb-4">
                        <div className="icon-badge glass" style={{ color: lab.color }}>{lab.icon}</div>
                    </div>
                    <h1 className="hero-title">{lab.title}</h1>
                </div>
            </div>

            <div className="container py-16">
                <Link to="/" className="back-link mb-8 inline-flex items-center gap-2"><ArrowLeft size={20} /> Back to Home</Link>
                <div className="glass-card page-content-card p-10">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: lab.color }}>About the Lab</h2>
                    <p className="text-lg text-muted mb-8 leading-relaxed">
                        {lab.desc}
                    </p>

                    <h3 className="text-xl font-bold mb-4">State-of-the-Art Facilities</h3>
                    <ul className="feature-list">
                        {lab.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 mb-3 text-muted">
                                <span className="dot" style={{ backgroundColor: lab.color }}></span> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LabPage;
