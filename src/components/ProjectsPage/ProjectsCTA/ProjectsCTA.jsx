import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectsCTA.css";

const ProjectsCTA = () => {
    return (
        <section className="projects-cta">

            <motion.div
                className="projects-cta-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >

                <span className="projects-cta-tag">
                    Have a Project in Mind?
                </span>

                <h2>
                    Let's Turn Your Idea Into
                    <span> Reality</span>
                </h2>

                <p>
                    I build responsive websites, modern web applications
                    and full-stack solutions using the MERN stack.
                    Let's discuss your next project.
                </p>

                <div className="projects-cta-buttons">

                    <Link
                        to="/contact"
                        className="projects-primary-btn"
                    >
                        Start a Project
                    </Link>

                    <Link
                        to="/about"
                        className="projects-secondary-btn"
                    >
                        Know More About Me
                    </Link>

                </div>

            </motion.div>

        </section>
    );
};

export default ProjectsCTA;