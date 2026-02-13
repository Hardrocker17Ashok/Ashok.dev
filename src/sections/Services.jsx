import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable websites and web applications."
  },
  {
    title: "Mobile App Development",
    desc: "Android & cross-platform apps with clean architecture."
  },
  {
    title: "Backend & API Development",
    desc: "Secure REST APIs and backend systems using modern stacks."
  },
  {
    title: "AI Integration",
    desc: "ChatGPT & AI features integrated into real-world products."
  },
  {
    title: "Maintenance & Support",
    desc: "Long-term support, optimization and feature upgrades."
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="services" className="services" ref={ref}>
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 40,
              scale: isInView ? 1 : 0.96,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
