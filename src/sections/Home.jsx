import { useEffect, useState, useRef } from "react";
import "./Home.css";
import profile from "../assets/profile.jpeg";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Real-Time Application Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);
  const imageRef = useRef(null);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const role = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = Math.min(charIndex + 1, role.length);
        setText(role.substring(0, next));
        setCharIndex(next);
        if (next === role.length) {
          setTimeout(() => mounted.current && setIsDeleting(true), 900);
        }
      } else {
        const next = Math.max(charIndex - 1, 0);
        setText(role.substring(0, next));
        setCharIndex(next);
        if (next === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  /* ===== Resume & Scroll ===== */

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/15sfJdOdwuTry7JnM1EpeDiPgMdHzGxmF/view",
      "_blank"
    );
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ===== 3D IMAGE EFFECT ===== */

  const handleMouseMove = (e) => {
    const card = imageRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20);
    const rotateY = ((centerX - x) / 20);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    imageRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section id="home" className="home">
      <div className="home-wrapper">

        {/* LEFT */}
        <div className="home-content">
          <h1 className="home-title">
            Hi, I’m <span className="accent">Ashok Sharma</span>
          </h1>

          <p className="home-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor" />
          </p>

          <div className="home-buttons">
            <button onClick={openResume} className="btn primary download-btn">
              Download Resume
            </button>

            <button onClick={scrollToContact} className="btn outline">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE WITH 3D EFFECT */}
        <div
          className="ig-wrapper"
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <img src={profile} alt="Ashok Sharma" className="ig-photo" />
        </div>

      </div>
    </section>
  );
};

export default Home;
