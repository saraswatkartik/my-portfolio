import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./ProjectsHero.css";

const ProjectsHero = () => {
    return (
        <section className="projects-hero">

            <div className="projects-hero-container">

                <motion.div
                    className="projects-hero-content"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="projects-tag">
                        My Portfolio Work
                    </span>

                    <h1>
                        Projects That Showcase
                        <span> My Development Journey</span>
                    </h1>

                    <p>
                        A collection of frontend and full-stack
                        applications built using React, Node.js,
                        Express and MongoDB.
                    </p>

                    <div className="projects-tech">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>MERN Stack</span>

                    </div>

                    <a
                        href="https://github.com/saraswatkartik"
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                    >
                        <FaGithub />
                        View GitHub
                    </a>

                </motion.div>

            </div>

        </section>
    );
};

export default ProjectsHero;