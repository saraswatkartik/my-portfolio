import "./AboutHero.css";
import { motion } from "framer-motion";
import aboutHeroImg from "../../../assets/images/Home/img-2-enhanced.png";

const AboutHero = () => {
    return (
        <section className="about-hero">

            <div className="about-hero-container">

                {/* Left Content */}

                <motion.div
                    className="about-hero-content"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="about-tag">
                        About Me
                    </span>

                    <h1>
                        Full Stack Developer
                        <span> & MCA Student</span>
                    </h1>

                    <p>
                        Passionate about building modern,
                        responsive and scalable web applications.
                        I enjoy transforming ideas into real-world
                        digital experiences using React, Node.js,
                        Express and MongoDB.
                    </p>

                    <div className="about-hero-stats">

                        {[
                            { number: "10+", label: "Projects" },
                            { number: "6 Months", label: "Internship" },
                            { number: "MERN", label: "Stack" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="hero-stat"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                            >
                                <h3>{item.number}</h3>
                                <span>{item.label}</span>
                            </motion.div>
                        ))}

                    </div>

                </motion.div>

                {/* Right Image */}

                <motion.div
                    className="about-hero-image"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="about-image-wrapper">

                        <img
                            src={aboutHeroImg}
                            alt="Kartik Saraswat"
                            className="hover:scale-105 transition-all ease-in duration-300"
                        />

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default AboutHero;