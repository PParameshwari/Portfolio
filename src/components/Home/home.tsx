// import React from "react";
import { Button } from "@mui/material";
import '../../styles/Home/home.scss';
import Contact from "../Contact/contact";
import AboutSection from "../About/about";
import ProjectSection from "../Project/project";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <section>
            <div className="nav-content">
                <div className="nav-text">
                    <p className="intro">Hey, I'm Parameshwari👋</p>
                    <h2>
                        <span className="highlight">Front</span>end <br /> Developer
                    </h2>
                    <p className="description">
                        "Hey, I’m Parameshwari — a Front-End Developer who loves turning ideas into interactive designs."
                    </p>
                    <div className="nav-buttons">
                       <NavLink to="/contact"> <Button variant="contained" className="get-in-touch">Get In Touch</Button></NavLink>
                      <NavLink to="/projects">  <Button variant="contained" className="browse-projects">Browse Projects</Button></NavLink>
                        <Button variant="contained" className="resume">Resume Download</Button>
                    </div>
                </div>
            </div>
       
            <ProjectSection />
            <AboutSection />
            <Contact />
    
        </section>

    )
}

export default Home;
