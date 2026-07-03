import { motion } from "framer-motion";
import "./ContactHero.css";

const ContactHero = () => {
    return (
        <section className="contact-hero">

            <motion.div
                className="contact-hero-content"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <span>Get In Touch</span>

                <h1>
                    Let's Build Something
                    <span> Amazing Together</span>
                </h1>

                <p>
                    Have a project idea, collaboration opportunity,
                    or just want to say hello?
                    I'd love to hear from you.
                </p>

            </motion.div>

        </section>
    );
};

export default ContactHero;