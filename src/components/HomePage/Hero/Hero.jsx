import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../../../assets/images/Home/Hero-img3.png";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="hero">

            {/* Blur Effects */}
            <div className="hero-blur blur-1"></div>
            <div className="hero-blur blur-2"></div>

            <div className="hero-container">

                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="hero-tag">
                        <span className="wave-hand">
                            👋
                        </span>

                        Welcome To My Portfolio
                    </span>

                    <h1>
                        KARTIK
                        <br />
                        <span className="hero-lastname">
                            SARASWAT
                        </span>
                    </h1>

                    <h2>
                        I'm a{" "}
                        <span className="typed-text">
                            <Typewriter
                                words={[
                                    "Full Stack Developer",
                                    "Creative Designer",
                                    "Content Creator",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                            />
                        </span>
                    </h2>

                    <p>

                        I build modern, scalable and user-focused web
                        applications using React, Node.js, Express and
                        MongoDB. Passionate about creating seamless
                        digital experiences with clean code and elegant design.

                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/projects"
                            className="primary-btn"
                        >
                            View Projects
                        </Link>

                        <a
                            href="/kartik-resume.pdf"
                            download="Kartik-Saraswat-Resume.pdf"
                            className="secondary-btn flex gap-3 justify-center items-center"
                        >
                            Download Resume <FaDownload />
                        </a>

                    </div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="image-wrapper">
                        <img
                            src={heroImg}
                            alt="Profile"
                            className="flipped hover:scale-105 transition-all ease-in duration-300"
                        />
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;