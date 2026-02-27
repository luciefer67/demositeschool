import React from 'react';
import './Gallery.css';

const galleryItems = [
    { img: "/images/classroom.png", title: "Modern Classrooms", category: "Academics", className: "span-2-col" },
    { img: "/images/events.png", title: "Annual Festival", category: "Events", className: "" },
    { img: "/images/sports.png", title: "Sports Complex", category: "Athletics", className: "span-2-row" },
    { img: "/images/labs.png", title: "Advanced Labs", category: "Research", className: "" },
    { img: "/images/students.png", title: "Diverse Community", category: "Student Life", className: "span-2-col" }
];

const Gallery = () => {
    return (
        <section className="section gallery-section" id="campus">
            <div className="container">
                <h2 className="section-title">Experience Campus Life</h2>
                <p className="section-subtitle">
                    From state-of-the-art facilities to a vibrant student community, discover what makes Nexus Academy exceptional.
                </p>

                <div className="gallery-grid">
                    {galleryItems.map((item, idx) => (
                        <div className={`gallery-item ${item.className}`} key={idx}>
                            <div className="img-container">
                                <img src={item.img} alt={item.title} />
                                <div className="overlay">
                                    <span className="category glass">{item.category}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
