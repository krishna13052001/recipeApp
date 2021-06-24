import React from "react";
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram,FaHackerrank } from 'react-icons/fa';
const About = () => {
    return (
        <section className="section about-section">
            <h1 className="section-title">About Us</h1>
            <p className="contents">
                Hello, Guys<br></br>
                My name is Jonnalagadda Vekata Sathya Krishna, I am pursing my
                B.tech 3rd year in IIIT Kottayam in specialized in C.S.E with an
                overall cgpa of 9.34.My area of interset are Software
                Development, Full Stack Development, Aws, Data Science
            </p>
            <h4>Social media Sites</h4>
            <ul className="links">
                <li><a href="https://github.com/krishna13052001" target="_blank" rel="noreferrer"> <FaGithub /> Github</a></li>
                <li><a href="https://www.linkedin.com/in/sathya-krishna-2001/" target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100009227176190" target="_blank" rel="noreferrer"><FaFacebook />Facebook</a></li>
                <li><a href="https://www.instagram.com/krishna_jvsk/" target="_blank" rel="noreferrer"><FaInstagram />Instagram</a></li>
                <li><a href="https://www.hackerrank.com/jvs_krishna" target="_blank" rel="noreferrer"><FaHackerrank />Haker Rank</a></li>
            </ul>
        </section>
    );
};

export default About;
