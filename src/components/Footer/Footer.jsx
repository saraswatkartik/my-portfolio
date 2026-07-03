import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp,
    FaMapMarkerAlt,
    FaEnvelope,
    FaLaptopCode,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">

            <motion.div
                className="footer-container"
                initial={{
                    opacity: 0,
                    y: 60,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                }}
            >

                {/* Brand */}

                <div className="footer-brand">

                    <h2 className="font-bold">
                        Kartik <span>Saraswat.</span>
                    </h2>

                    <p>
                        Full Stack Web Developer passionate about building
                        modern, scalable and high-performance web applications.
                    </p>

                    <div className="social-links">

                        <motion.a
                            href="https://github.com/saraswatkartik"
                            target="_blank"
                            rel="norefferer"
                            whileHover={{
                                y: -5,
                                scale: 1.1,
                            }}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/kartik-saraswat-283b73373/"
                            target="_blank"
                            rel="norefferer"
                            whileHover={{
                                y: -5,
                                scale: 1.1,
                            }}
                        >
                            <FaLinkedinIn />
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/_kartik_saraswat_/"
                            target="_blank"
                            rel="norefferer"
                            whileHover={{
                                y: -5,
                                scale: 1.1,
                            }}
                        >
                            <FaInstagram />
                        </motion.a>

                    </div>

                </div>

                {/* Links */}

                <div className="footer-links">

                    <h3 className="text-xl">
                        Quick Links
                    </h3>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h3 className="text-xl">
                        Get In Touch
                    </h3>

                    <p>
                        <FaMapMarkerAlt className="text-[#6366f1]" />
                        Ghaziabad, India
                    </p>

                    <p>
                        <a href="mailto:kartiksaraswat882003@gmail.com" target="_blank">
                            <FaEnvelope className="text-[#6366f1]" />
                            kartiksaraswat882003@gmail.com
                        </a>
                    </p>

                    <p>
                        <FaLaptopCode className="text-[#6366f1]" />
                        Available for Freelance
                    </p>

                </div>

            </motion.div>

            {/* Bottom */}

            <motion.div
                className="footer-bottom text-center md:text-left"
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.6,
                }}
            >

                <p>
                    © {new Date().getFullYear()} Kartik Saraswat.
                    Crafted with{" "}
                    <span className="heart">
                        ❤️
                    </span>{" "}
                    using MERN Stack.
                </p>

                <motion.button
                    onClick={scrollToTop}
                    className="scroll-top flex items-center justify-center"
                    whileHover={{
                        y: -5,
                        scale: 1.08,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    <FaArrowUp />
                </motion.button>

            </motion.div>

        </footer>
    );
};

export default Footer;