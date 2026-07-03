import { motion } from "framer-motion";

import {
    FaCode,
    FaMobileAlt,
    FaRocket,
    FaLightbulb,
} from "react-icons/fa";

import "./WhyWorkWithMe.css";

const features = [
    {
        icon: <FaCode />,
        title: "Clean Code",
        desc: "Writing scalable, maintainable and structured code following modern development practices.",
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        desc: "Building websites that work seamlessly across desktop, tablet and mobile devices.",
    },
    {
        icon: <FaRocket />,
        title: "Performance Focused",
        desc: "Creating fast, optimized and user-friendly applications with smooth experiences.",
    },
    {
        icon: <FaLightbulb />,
        title: "Problem Solver",
        desc: "Turning ideas into real-world solutions through creativity and practical development.",
    },
];

const WhyWorkWithMe = () => {
    return (
        <section className="why-section">

            <div className="why-container">

                <motion.div
                    className="why-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span>Why Work With Me</span>

                    <h2>
                        What Makes Me Different
                    </h2>

                    <p>
                        Combining technical skills, creativity and
                        problem-solving mindset to deliver quality solutions.
                    </p>
                </motion.div>

                <div className="why-grid">

                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                        >

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhyWorkWithMe;