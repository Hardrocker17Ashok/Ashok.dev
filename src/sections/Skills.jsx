import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaServer,
  FaCode,
  FaTools,
  FaJava,
  FaReact,
  FaGitAlt,
  FaDocker
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiTailwindcss,
  SiFlutter
} from "react-icons/si";

import "./Skills.css";

const skillData = [
  {
    category: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Java", level: 90, icon: <FaJava /> },
      { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
      { name: "REST APIs", level: 85, icon: <FaCode /> },
      { name: "MySQL", level: 80, icon: <SiMysql /> },
      { name: "MongoDB", level: 75, icon: <SiMongodb /> },
      { name: "Microservices", level: 65, icon: <FaServer /> },
      { name: "Payment Gateway Integration", level: 85, icon: <FaCode /> },
    ],
  },
  {
    category: "Frontend",
    icon: <FaCode />,
    skills: [
      { name: "React.js", level: 85, icon: <FaReact /> },
      { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
      { name: "HTML / CSS", level: 90, icon: <FaCode /> },
      { name: "Responsive Design", level: 85, icon: <FaCode /> },
      { name: "XML (Android UI)", level: 75, icon: <FaCode /> },
      { name: "Dart (Flutter)", level: 70, icon: <SiFlutter /> },
    ],
  },
  {
    category: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git & GitHub", level: 85, icon: <FaGitAlt /> },
      { name: "VS Code", level: 90, icon: <FaCode /> },
      { name: "Android Studio", level: 90, icon: <FaCode /> },
      { name: "IntelliJ IDEA", level: 85, icon: <FaCode /> },
      { name: "Postman", level: 80, icon: <SiPostman /> },
      { name: "Firebase", level: 75, icon: <SiFirebase /> },
      { name: "MongoDB Atlas", level: 75, icon: <SiMongodb /> },
      { name: "Docker (Basics)", level: 60, icon: <FaDocker /> },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Technical Expertise
      </motion.h2>

      <div className="skills-grid">
        {skillData.map((group, i) => (
          <motion.div
            className="skill-category"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="category-title">
              <span className="category-icon">{group.icon}</span>
              {group.category}
            </h3>

            {group.skills.map((skill, j) => (
              <div className="skill-row" key={j}>
                <div className="skill-top">
                  <div className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    animate={{
                      width: isInView ? `${skill.level}%` : "0%",
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: j * 0.05,
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
