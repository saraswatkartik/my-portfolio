import { motion } from "framer-motion";

import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contact-section">

            <div className="contact-container">

                {/* Left Side */}

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <span className="contact-tag">
                        Contact Information
                    </span>

                    <h2>
                        Let's Connect
                    </h2>

                    <p>
                        Feel free to reach out for collaborations,
                        freelance projects, internships or just a friendly chat.
                    </p>

                    <div className="info-card">

                        <FaEnvelope />

                        <div>
                            <h4>Email</h4>
                            <p>kartiksaraswat882003@gmail.com</p>
                        </div>

                    </div>

                    <div className="info-card">

                        <FaMapMarkerAlt />

                        <div>
                            <h4>Location</h4>
                            <p>Ghaziabad, India</p>
                        </div>

                    </div>

                    <div className="social-icons">

                        <a href="https://github.com/saraswatkartik"
                            target="_blank"
                            rel="norefferer"
                        >
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/kartik-saraswat-283b73373/"
                            target="_blank"
                            rel="norefferer"
                        >
                            <FaLinkedin />
                        </a>

                        <a href="https://www.instagram.com/_kartik_saraswat_/"
                            target="_blank"
                            rel="norefferer"
                        >
                            <FaInstagram />
                        </a>

                    </div>

                </motion.div>

                {/* Right Side */}

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <form className="contact-form">

                        <div className="form-group">

                            <input
                                type="text"
                                placeholder="Your Name"
                            />

                        </div>

                        <div className="form-group">

                            <input
                                type="email"
                                placeholder="Your Email"
                            />

                        </div>

                        <div className="form-group">

                            <input
                                type="text"
                                placeholder="Subject"
                            />

                        </div>

                        <div className="form-group">

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                            ></textarea>

                        </div>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </motion.div>

            </div>

        </section>
    );
};

export default ContactSection;