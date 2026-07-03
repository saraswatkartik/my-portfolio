import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import "./FeaturedProjects.css";

// Images Import
import templeImg from "../../../assets/images/projects/kalka-mandir.png";
import salonImg from "../../../assets/images/projects/js-makeover.png";
import portfolioImg from "../../../assets/images/projects/my-portfolio.png";
import EcommerceImg from "../../../assets/images/projects/masterkart.png";

const FeaturedProjects = () => {

    const otherProjects = [
        {
            title: "JS Makeover",
            image: salonImg,
            description:
                "Modern salon and beauty website with responsive design and elegant UI.",
        },
        {
            title: "Portfolio Website",
            image: portfolioImg,
            description:
                "Personal developer portfolio built using React and modern design principles.",
        },
        {
            title: "E-commerce Store",
            image: EcommerceImg,
            description:
                "Designed using HTML, CSS, and Bootstrap 5. Developed a fully responsive E-commerce UI with modern product showcase, responsive layouts, and intuitive navigation.",
        },
    ];
    return (
        <section className="projects-section">

            <div className="projects-container">

                <motion.div
                    className="projects-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <span>My Work</span>

                    <h2>
                        Featured Projects
                    </h2>

                    <p>
                        A collection of projects showcasing my
                        frontend and full-stack development skills.
                    </p>

                </motion.div>

                {/* Featured Project */}

                <div className="featured-project">

                    <motion.div
                        className="featured-image"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <img
                            src={templeImg}
                            alt="Temple Management System"
                        />

                    </motion.div>

                    <motion.div
                        className="featured-content"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="featured-badge">
                            Featured Project
                        </span>

                        <h3>
                            Siddhpeeth Shri Sai Kalka Mandir
                        </h3>

                        <p>
                            A complete MERN Stack Temple Management
                            System with online registration,
                            token generation, admin dashboard,
                            registration management and MongoDB integration.
                        </p>

                        <div className="tech-stack">

                            {[
                                "React",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT",
                            ].map((tech, index) => (

                                <motion.span
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: .8
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        delay: index * 0.1
                                    }}
                                >
                                    {tech}
                                </motion.span>

                            ))}

                        </div>

                        <div className="project-buttons">

                            <a href="https://shrisaikalkamandir.vercel.app" target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>

                            <a href="#">
                                <FaGithub />
                                GitHub
                            </a>

                        </div>

                    </motion.div>

                </div>

                {/* Other Projects */}

                <div className="project-grid">

                    {otherProjects.map((project, index) => (

                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15
                            }}
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="card-content">

                                <h3>{project.title}</h3>

                                <p>
                                    {project.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

                <div className="all-projects-wrapper">

                    <Link
                        to="/projects"
                        className="all-projects-btn"
                    >
                        View All Projects &#10140;
                    </Link>

                </div>
            </div>


        </section >
    );
};

export default FeaturedProjects;