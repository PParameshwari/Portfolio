import React from "react";
import "../../styles/Footer/footer.scss";

// Import your social icons (you can also use react-icons or MUI icons)
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Navigation */}
                <nav className="footer-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Right Social Links */}
                <div className="footer-socials">
                    {/* <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram />
                    </a> */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub />
                    </a>
                    {/* <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
