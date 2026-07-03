import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaBriefcase,
    FaLayerGroup
} from "react-icons/fa";

import "./AboutPreview.css";

const stats = [
    {
        icon: <FaCode />,
        value: "10+",
        label: "Projects"
    },
    {
        icon: <FaBriefcase />,
        value: "6 Months",
        label: "Internship"
    },
    {
        icon: <FaLaptopCode />,
        value: "MERN",
        label: "Stack"
    },
    {
        icon: <FaLayerGroup />,
        value: "100%",
        label: "Responsive"
    }
];

const AboutPreview = () => {
    return (
        <section className="about-preview">

            <div className="about-container">

                {/* Left Content */}

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="section-tag">
                        About Me
                    </span>

                    <h2>
                        Passionate MERN Stack Developer Building Modern Web Experiences
                    </h2>

                    <p>
                        I'm Kartik Saraswat, an MCA student and MERN Stack Developer.
                        I enjoy creating responsive, scalable and user-friendly web
                        applications using modern technologies.
                    </p>

                    <p>
                        From Temple Management Systems to business websites, I focus
                        on clean UI, smooth user experience and efficient backend solutions.
                    </p>

                    <Link
                        to="/about"
                        className="about-btn"
                    >
                        Learn More
                    </Link>

                </motion.div>

                {/* Right Stats */}

                <div className="stats-grid">

                    {stats.map((item, index) => (

                        <motion.div
                            key={index}
                            className="stat-card"
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

                            {item.icon}

                            <h3>{item.value}</h3>

                            <p>{item.label}</p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default AboutPreview;