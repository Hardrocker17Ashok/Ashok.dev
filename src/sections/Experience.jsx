import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "Tizell.com",
    role: "Full Stack Developer",
    duration: "2025",
    desc: "Developed a full-stack eCommerce web application with secure authentication, product management, cart system, and payment integration. Built scalable backend APIs and responsive frontend UI with focus on performance and clean architecture.",
    live: "https://tizell.com",
    code: "https://github.com/Hardrocker17Ashok/Tizell.git"
  },
  {
    company: "Waah Restaurant",
    role: "Frontend & Backend Developer",
    duration: "2024",
    desc: "Built a modern food ordering web application featuring real-time cart updates, order management system, and admin dashboard. Designed responsive UI with seamless user experience and integrated backend APIs for order processing.",
    live: "https://waah-menu-web-app.vercel.app/",
    code: "https://github.com/Hardrocker17Ashok/Waah-menu-web-app.git"
  },
  {
    company: "Chit Chat App",
    role: "Full Stack Developer",
    duration: "2024",
    desc: "Created a real-time chat application with authentication, private messaging, and responsive UI. Implemented scalable backend with secure data handling and real-time communication features for smooth messaging experience.",
    live: "https://github.com/Hardrocker17Ashok/Chit-Chat.git",
    code: "https://github.com/Hardrocker17Ashok/Chit-Chat.git"
  },
  {
    company: "Treadful Trading App",
    role: "Android Developer",
    duration: "2023",
    desc: "Developed an Android-based trading application providing market data visualization, portfolio tracking, and user-friendly trading interface. Focused on performance optimization, clean UI design, and secure user authentication.",
    live: "https://play.google.com/store/apps/details?id=yourapp",
    code: "https://github.com/Hardrocker17Ashok/TradeFuel.git"
  }
];


const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : index % 2 === 0 ? -40 : 40,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-duration">{exp.duration}</span>
              <p>{exp.desc}</p>

              
              <div className="experience-links">
                <a href={exp.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={exp.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
