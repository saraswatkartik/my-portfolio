import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ContactCTA.css";

const ContactCTA = () => {
    return (
        <section className="contact-cta">

            <motion.div
                className="cta-container"
                initial={{
                    opacity: 0,
                    scale: 0.9
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 0.8
                }}
            >

                <div className="cta-content">

                    <motion.span
                        className="cta-tag"
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.2
                        }}
                    >
                        🚀 Let's Work Together
                    </motion.span>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.3
                        }}
                    >
                        <h2>
                            Have a Project Idea?
                            <br />
                            Let's Build Something
                            <span> Amazing</span>
                        </h2>
                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.4
                        }}
                    >
                        I'm always open to discussing new projects,
                        creative ideas, or opportunities to be part
                        of your vision.
                    </motion.p>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: 0.5
                        }}
                    >
                        <Link
                            to="/contact"
                            className="cta-btn"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                </div>

            </motion.div>

        </section>
    );
};

export default ContactCTA;