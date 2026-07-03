import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
    return (
        <section className="contact-cta-section">

            <motion.div
                className="contact-cta-container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >

                <span className="contact-cta-badge">
                    Ready To Start?
                </span>

                <h2>
                    Let's Build Something
                    <span> Amazing Together</span>
                </h2>

                <p>
                    Whether it's a business website, portfolio,
                    MERN application or a custom solution,
                    let's discuss your next project.
                </p>

                <Link
                    to="/contact"
                    className="contact-cta-btn"
                >
                    Send Message
                </Link>

            </motion.div>

        </section>
    );
};

export default ContactCTA;