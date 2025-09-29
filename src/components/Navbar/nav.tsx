import "../../styles/navbar/nav.scss";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <section className="nav">
      <header className="nav-header">
        {/* Desktop inline nav links */}
        <nav className="nav-box">
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-links">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-links">
            About
          </NavLink>
        </nav>

        {/* Contact icon */}
        <Link to="/contact">
          <PermPhoneMsgIcon className="contact-img" />
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="drawer-overlay">
            <div ref={drawerRef} className="drawer">
              <div className="close-btn" onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </div>
              <NavLink to="/" className="nav-links" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className="nav-links"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </section>
  );
};

export default Navbar;
