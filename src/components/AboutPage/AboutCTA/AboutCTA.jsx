import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AboutCTA.css";

const AboutCTA = () => {
    return (
        <section className="about-cta">

            <motion.div
                className="about-cta-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >

                <span className="cta-badge">
                    🚀 Let's Work Together
                </span>

                <h2>
                    Ready To Bring Your
                    <span> Ideas To Life?</span>
                </h2>

                <p>
                    Whether you need a modern website, a full-stack
                    web application, or a developer to join your team,
                    I'm always excited to work on meaningful projects.
                </p>

                <div className="cta-buttons">

                    <Link
                        to="/contact"
                        className="cta-primary-btn"
                    >
                        Contact Me
                    </Link>

                    <Link
                        to="/projects"
                        className="cta-secondary-btn"
                    >
                        View Projects
                    </Link>

                </div>

            </motion.div>

        </section>
    );
};

export default AboutCTA;