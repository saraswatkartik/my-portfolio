import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import "./ProjectsGrid.css";

import templeImg from "../../../assets/images/projects/kalka-mandir.png";
import salonImg from "../../../assets/images/projects/js-makeover.png";
import portfolioImg from "../../../assets/images/projects/kartik-portfolio.png";
import EcommerceImg from "../../../assets/images/projects/masterkart.png";

const projectsData = [
    {
        title: "Temple Management System",
        category: "MERN",
        image: templeImg,
        desc: "Complete MERN stack temple registration and admin dashboard.",
        demo: "https://shrisaikalkamandir.vercel.app/",
        github: "#",
    },

    {
        title: "JS Makeover",
        category: "React",
        image: salonImg,
        desc: "Modern salon website with responsive UI.",
        demo: "#",
        github: "#",
    },

    {
        title: "Developer Portfolio",
        category: "MERN",
        image: portfolioImg,
        desc: "Personal portfolio built with React.",
        demo: "#",
        github: "#",
    },

    {
        title: "Future Ecommerce",
        category: "BootStrap",
        image: EcommerceImg,
        desc: "Upcoming ecommerce application.",
        demo: "#",
        github: "#",
    },
];

const filters = [
    "All",
    "MERN",
    "React",
    "BootStrap",
];

const ProjectsGrid = () => {

    const [activeFilter, setActiveFilter] =
        useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? projectsData
            : projectsData.filter(
                (item) =>
                    item.category === activeFilter
            );

    return (
        <section className="projects-grid-section">

            <div className="projects-grid-container">

                {/* Filter */}

                <div className="filter-buttons">

                    {filters.map((filter) => (

                        <button
                            key={filter}
                            onClick={() =>
                                setActiveFilter(filter)
                            }
                            className={
                                activeFilter === filter
                                    ? "active"
                                    : ""
                            }
                        >
                            {filter}
                        </button>

                    ))}

                </div>

                {/* Grid */}

                <div className="projects-grid">

                    {filteredProjects.map(
                        (project, index) => (

                            <motion.div
                                key={index}
                                className="project-card"
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >

                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                </div>

                                <div className="project-content">

                                    <span>
                                        {project.category}
                                    </span>

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.desc}
                                    </p>

                                    <div className="project-links">

                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub />
                                        </a>

                                    </div>

                                </div>

                            </motion.div>
                        )
                    )}

                </div>

            </div>

        </section>
    );
};

export default ProjectsGrid;