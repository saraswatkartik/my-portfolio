import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCheckCircle,
} from "react-icons/fa";

import "./FeaturedProject.css";

// Screenshot Import
import templeProject from "../../../assets/images/projects/kalka-mandir.png";

const FeaturedProject = () => {
    return (
        <section className="featured-project-section">

            <div className="featured-project-container">

                {/* Image */}

                <motion.div
                    className="featured-project-image"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={templeProject}
                        alt="Temple Management System"
                    />
                </motion.div>

                {/* Content */}

                <motion.div
                    className="featured-project-content"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="featured-badge">
                        Featured MERN Project
                    </span>

                    <h2>
                        Siddhpeeth Shri Sai Kalka Mandir
                    </h2>

                    <p>
                        A complete MERN Stack Temple Management
                        System with online registration,
                        token generation, admin dashboard,
                        registration tracking and MongoDB Atlas integration.
                    </p>

                    {/* Tech Stack */}

                    <div className="featured-tech">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>JWT</span>

                    </div>

                    {/* Features */}

                    <div className="project-features">

                        <div>
                            <FaCheckCircle />
                            Online Registration System
                        </div>

                        <div>
                            <FaCheckCircle />
                            Token Number Generation
                        </div>

                        <div>
                            <FaCheckCircle />
                            Admin Dashboard
                        </div>

                        <div>
                            <FaCheckCircle />
                            MongoDB Atlas Integration
                        </div>

                        <div>
                            <FaCheckCircle />
                            Status Management
                        </div>

                        <div>
                            <FaCheckCircle />
                            Responsive Design
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="featured-buttons">

                        <a
                            href="https://shrisaikalkamandir.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default FeaturedProject;