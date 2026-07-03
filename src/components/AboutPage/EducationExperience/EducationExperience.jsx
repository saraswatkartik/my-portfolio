import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaBriefcase,
} from "react-icons/fa";

import "./EducationExperience.css";

const EducationExperience = () => {
    return (
        <section className="edu-exp-section">

            <div className="edu-exp-container">

                {/* Education */}

                <motion.div
                    className="edu-exp-column"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="column-heading">

                        <FaGraduationCap />

                        <h2>Education</h2>

                    </div>

                    <div className="timeline-card">

                        <h3>MCA</h3>

                        <span>AKTU University</span>

                        <p>Currently Pursuing</p>

                    </div>

                    <div className="timeline-card">

                        <h3>BCA</h3>

                        <span>CCS University</span>

                        <p>Completed in 2025</p>

                    </div>

                    <div className="timeline-card">

                        <h3>Intermediate</h3>

                        <span>CBSE Board</span>

                        <p>Completed in 2021</p>

                    </div>

                </motion.div>

                {/* Experience */}

                <motion.div
                    className="edu-exp-column"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="column-heading">

                        <FaBriefcase />

                        <h2>Experience</h2>

                    </div>

                    <div className="timeline-card">

                        <h3>Web Development Intern</h3>

                        <span>MIRASHKA</span>

                        <p>
                            Worked on responsive web development
                            and modern UI implementation.
                        </p>

                    </div>

                    <div className="timeline-card">

                        <h3>Frontend Development</h3>

                        <span>React & JavaScript</span>

                        <p>
                            Developed responsive interfaces
                            using React and modern CSS.
                        </p>

                    </div>

                    <div className="timeline-card">

                        <h3>MERN Stack Development</h3>

                        <span>Freelance Projects</span>

                        <p>
                            Built full-stack applications with
                            Node.js, Express and MongoDB.
                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default EducationExperience;