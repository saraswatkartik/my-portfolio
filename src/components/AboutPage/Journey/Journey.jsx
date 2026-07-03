import { motion } from "framer-motion";
import "./Journey.css";

const timelineData = [
    {
        year: "2022",
        title: "BCA Journey Started",
        desc: "Started learning computer fundamentals and web technologies.",
    },
    {
        year: "2025",
        title: "Web Development Internship",
        desc: "Completed 6 months internship and worked on real-world projects.",
    },
    {
        year: "2025",
        title: "React Development",
        desc: "Built responsive and modern frontend applications using React.",
    },
    {
        year: "2026",
        title: "Temple Management System",
        desc: "Developed a complete MERN stack project with admin dashboard and MongoDB integration.",
    },
    {
        year: "Present",
        title: "MERN Stack Developer",
        desc: "Building scalable full-stack applications and continuously improving skills.",
    },
];

const Journey = () => {
    return (
        <section className="journey-section">

            <div className="journey-container">

                <motion.div
                    className="journey-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span>My Journey</span>

                    <h2>
                        Growth Through Learning & Building
                    </h2>

                    <p>
                        My journey from learning web development
                        to building complete MERN stack applications.
                    </p>
                </motion.div>

                <div className="timeline">

                    {timelineData.map((item, index) => (

                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"
                                }`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -80 : 80,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                        >
                            <div className="timeline-content">

                                <span className="timeline-year">
                                    {item.year}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Journey;