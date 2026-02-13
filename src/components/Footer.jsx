import { useEffect, useRef } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaEnvelope,
  FaHome,
  FaTools,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaPhone
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer-enterprise">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-col brand">
          <h2>Ashok Sharma</h2>
          <p>
            Full Stack Software Developer focused on building
            scalable, clean and real-world applications.
          </p>

          <div className="footer-meta">
            <span>📍 India</span>
            <span>•</span>
            <span className="available">Available for opportunities</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home"><FaHome className="icon" /> Home</a></li>
            <li><a href="#services"><FaTools className="icon" /> Services</a></li>
            <li><a href="#skills"><FaCode className="icon" /> Skills</a></li>
            <li><a href="#education"><FaGraduationCap className="icon" /> Education</a></li>
            <li><a href="#experience"><FaBriefcase className="icon" /> Experience</a></li>
            <li><a href="#contact"><FaPhone className="icon" /> Contact</a></li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://github.com/Hardrocker17Ashok" target="_blank" rel="noreferrer">
                <FaGithub className="icon" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/artifical-ashok-sharma/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/ashok_developer" target="_blank" rel="noreferrer">
                <FaTwitter className="icon" /> Twitter / X
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ashoksharma.dev/" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:ashoksharmaas9358@gmail.com">
                <FaEnvelope className="icon" /> Email
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <span>© {year} Ashok Sharma</span>

        <div className="footer-legal">
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Terms</a>
          <span>•</span>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
