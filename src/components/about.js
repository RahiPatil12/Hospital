import React from 'react';
import './about.css';
import hospital1 from './images/hospital1.png';
import hospital2 from './images/hospital2.png';
import hospital3 from './images/hospital3.png';

const About = () => {
    return (
        <div className='about'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade"  >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hospital1} className="hospitalImages" alt="H1" />
                    </div>
                    <div className="carousel-item">
                        <img src={hospital2} className="hospitalImages" alt="H2" />
                    </div>
                    <div className="carousel-item">
                        <img src={hospital3} className="hospitalImages" alt="H3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="about-header">
                <h1>About Oxycare Hospital</h1>
            </div>
            <div className="about-content">
                
                <div className="about-text">
                    <h2>Our Mission</h2>
                    <p>
                        At Oxycare Hospital, we are committed to providing high-quality, comprehensive healthcare services
                        to our community. Our dedicated team of doctors, nurses, and support staff work tirelessly to
                        ensure the best outcomes for our patients.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a healthier future for all, where access to excellent healthcare is a given. Through
                        innovation, education, and compassionate care, we aim to be leaders in the healthcare industry.
                    </p>
                    <h2>Our Values</h2>
                    <ul>
                        <li>Compassion</li>
                        <li>Integrity</li>
                        <li>Excellence</li>
                        <li>Innovation</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default About;
