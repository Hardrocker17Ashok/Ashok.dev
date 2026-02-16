import { useEffect, useState, useRef } from "react";

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

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // auto close after click
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
    {
      rootMargin: "-40% 0px -40% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  /* ✅ Outside Click Close Logic */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo" onClick={() => scrollToSection("home")}>
          Ashok<span>.</span>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div
          ref={toggleRef}
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          ref={menuRef}
          className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}
        >
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
