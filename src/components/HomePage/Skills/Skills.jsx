import "./Skills.css";
import { color, motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaWordpress,
    FaBootstrap,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiVercel,
    SiRender,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
    const frontendSkills = [
        {
            name: "React JS",
            icon: <FaReact />,
            color: "#61DAFB",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
            color: "#F7DF1E",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            color: "#38BDF8",
        },
        {
            name: "Bootstrap 5",
            icon: <FaBootstrap />,
            color: "#7952B3",
        },
        {
            name: "HTML 5",
            icon: <SiHtml5 />,
            color: "#E34F26",
        },
        {
            name: "CSS 3",
            icon: <SiCss />,
            color: "#1572B6",
        },
    ];

    const backendSkills = [
        {
            name: "Node.js",
            icon: <FaNodeJs />,
            color: "#68A063",
        },
        {
            name: "Express.js",
            icon: <SiExpress />,
            color: "#FFFFFF",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "#00ED64",
        },
        {
            name: "MySQL",
            icon: <GrMysql />,
            color: "#4479A1"
        },
        {
            name: "JWT Auth",
            icon: "🔐",
            color: "#8B5CF6",
        },
        {
            name: "REST APIs",
            icon: "🔗",
            color: "#6366F1",
        },
    ];

    const toolSkills = [
        {
            name: "Git",
            icon: <FaGitAlt />,
            color: "#F1502F",
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            color: "#FFFFFF",
        },
        {
            name: "Postman",
            icon: <SiPostman />,
            color: "#FF6C37",
        },
        {
            name: "WordPress",
            icon: <FaWordpress />,
            color: "#21759B"
        },
        {
            name: "Vercel",
            icon: <SiVercel />,
            color: "#FFFFFF",
        },
        {
            name: "Render",
            icon: <SiRender />,
            color: "#46E3B7",
        },
    ];

    return (
        <section className="skills-section">

            <div className="skills-container">

                <motion.div
                    className="skills-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span>My Skills</span>

                    <h2>
                        Technologies & Tools I Use
                    </h2>

                    <p>
                        A collection of technologies, frameworks and
                        tools I use to build modern full-stack web
                        applications.
                    </p>
                </motion.div>

                {/* Frontend */}

                <div className="skill-category">

                    <div className="category-title">
                        <h3>Frontend Development</h3>
                        <div className="title-line"></div>
                    </div>

                    <div className="skills-grid">

                        {frontendSkills.map((skill, index) => (
                            <motion.div
                                className="skill-card"
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1
                                }}
                            >

                                <div
                                    className="skill-icon"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>

                                <h4>{skill.name}</h4>

                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* Backend */}

                <motion.div
                    className="skill-category"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="category-title">
                        <h3>Backend & Database</h3>
                        <div className="title-line"></div>
                    </div>

                    <div className="skills-grid">

                        {backendSkills.map((skill, index) => (
                            <motion.div
                                className="skill-card"
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1
                                }}
                            >

                                <div
                                    className="skill-icon"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>

                                <h4>{skill.name}</h4>

                            </motion.div>
                        ))}

                    </div>
                </motion.div>

                {/* Tools */}

                <div className="skill-category">

                    <div className="category-title">
                        <h3>Tools & Deployment</h3>
                        <div className="title-line"></div>
                    </div>

                    <div className="skills-grid">

                        {toolSkills.map((skill, index) => (
                            <motion.div
                                className="skill-card"
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1
                                }}
                            >

                                <div
                                    className="skill-icon"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>

                                <h4>{skill.name}</h4>

                            </motion.div>
                        ))}

                    </div>
                </div>

            </div>

        </section >
    );
};

export default Skills;