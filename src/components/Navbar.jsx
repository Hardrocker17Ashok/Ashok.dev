import { useEffect, useState } from "react";
import "./Navbar.css";

import {
  FaHome,
  FaUser,
  FaCogs,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // 👈 auto close after click
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo" onClick={() => scrollToSection("home")}>
          Ashok<span>.</span>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>
          <li className={active === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>
            <FaHome /> Home
          </li>
          <li className={active === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>
            <FaUser /> About
          </li>
          <li className={active === "services" ? "active" : ""} onClick={() => scrollToSection("services")}>
            <FaCogs /> Services
          </li>
          <li className={active === "skills" ? "active" : ""} onClick={() => scrollToSection("skills")}>
            <FaCode /> Skills
          </li>
          <li className={active === "education" ? "active" : ""} onClick={() => scrollToSection("education")}>
            <FaGraduationCap /> Education
          </li>
          <li className={active === "experience" ? "active" : ""} onClick={() => scrollToSection("experience")}>
            <FaBriefcase /> Experience
          </li>
          <li className={active === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>
            <FaEnvelope /> Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
