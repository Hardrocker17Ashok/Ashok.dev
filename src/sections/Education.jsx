import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Education.css";

import manipalLogo from "../assets/manipal2.jpg";
import rajasthanLogo from "../assets/ru.jpg";
import rpsLogo from "../assets/rps.jpg";
import skndsLogo from "../assets/rbse.jpg";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Manipal University",
    score: "CGPA: 8.33",
    duration: "2023 – 2025",
    image: manipalLogo,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "University of Rajasthan",
    score: "73%",
    duration: "2020 – 2023",
    image: rajasthanLogo,
  },
  {
    degree: "Senior Secondary (12th – Mathematics)",
    institute: "RPS School",
    score: "72%",
    duration: "2019 – 2020",
    image: rpsLogo,
  },
  {
    degree: "Secondary (10th)",
    institute: "SKNDS School",
    score: "75%",
    duration: "2017 – 2018",
    image: skndsLogo,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="education" className="education" ref={ref}>
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Academic Journey
      </motion.h2>

      <div className="rope-container">

        {/* Animated Rope */}
        <motion.svg
          className="rope-line"
          viewBox="0 0 200 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M100 0 
               Q50 125 100 250 
               Q150 375 100 500 
               Q50 625 100 750 
               Q150 875 100 1000"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Start + End Circle */}
        <div className="start-circle"></div>
        <div className="end-circle"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`rope-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.25 }}
          >
            <div className="bubble"></div>

            <div className="rope-card">
              <img src={edu.image} alt={edu.institute} />
              <div className="rope-text">
                <div className="edu-header">
                  <h3>{edu.degree}</h3>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
                <p>{edu.institute}</p>
                <div className="edu-score">{edu.score}</div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
