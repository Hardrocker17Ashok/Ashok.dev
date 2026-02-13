import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import profileImg from "../assets/profile.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        {/* LEFT TEXT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I’m a <strong>Full Stack Software Developer</strong> focused on
            building scalable, real-world applications with clean architecture
            and maintainable systems.
          </p>

          <p>
            My experience includes <strong>backend systems, REST APIs,
            frontend UI performance</strong>, and integrating intelligent
            solutions into practical products.
          </p>

          <p>
            I believe in writing code that is simple, scalable, and built for
            long-term growth.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 }}
          transition={{ duration: 0.7 }}
        >
          <div className="image-frame">
            <img src={profileImg} alt="Ashok Sharma" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
