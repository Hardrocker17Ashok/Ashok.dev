import { useEffect, useState } from "react";
import "./Navbar.css";

// Icons
import {
  FaHome,
  FaUser,
  FaCogs,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection("home")}>
          Ashok<span>.</span>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </li>

          <li
            className={active === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            <FaUser style={{ marginRight: "8px" }} />
            About
          </li>

          <li
            className={active === "services" ? "active" : ""}
            onClick={() => scrollToSection("services")}
          >
            <FaCogs style={{ marginRight: "8px" }} />
            Services
          </li>

          <li
            className={active === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            <FaCode style={{ marginRight: "8px" }} />
            Skills
          </li>

          <li
            className={active === "education" ? "active" : ""}
            onClick={() => scrollToSection("education")}
          >
            <FaGraduationCap style={{ marginRight: "8px" }} />
            Education
          </li>

          <li
            className={active === "experience" ? "active" : ""}
            onClick={() => scrollToSection("experience")}
          >
            <FaBriefcase style={{ marginRight: "8px" }} />
            Experience
          </li>

          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            <FaEnvelope style={{ marginRight: "8px" }} />
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
