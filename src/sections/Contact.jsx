import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f2o1ocq",   
        "template_gjqqn2e",  
        formRef.current,
        "Otc6yfTUzwQ4A4XHF"   
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact ${visible ? "show" : ""}`}
    >
      <h2 className="contact-title">Let’s Build Something Great</h2>

      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">

          <div className="field">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="field">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="field">
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>

          <div className="field">
            <button type="submit">Send Message</button>
          </div>

        </form>

        {/* RIGHT SIDE - IMAGE */}
        <div className="contact-image">
          <img src="play.jpg" alt="Technical Illustration" />
        </div>

      </div>
    </section>
  );
};

export default Contact;
