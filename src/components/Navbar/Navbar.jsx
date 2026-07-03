import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
        { name: "Resume", path: "/resume" },
    ];

    useEffect(() => {
        document.body.style.overflow = isOpen
            ? "hidden"
            : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    return (
        <>
            <motion.header
                className={`navbar ${scrolled
                    ? "navbar-scrolled"
                    : ""
                    }`}
                initial={{
                    y: -80,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                }}
            >
                <div className="navbar-container">

                    {/* Logo */}

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                        }}
                    >
                        <Link
                            to="/"
                            className="logo flex items-center justify-center gap-2"
                        >
                            <span><FaCode /></span>KS<span>.</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}

                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({
                                    isActive,
                                }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Hire Button */}

                    <motion.button
                        className=""
                        whileHover={{
                            y: -3,
                            scale: 1.03,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        <Link to="/contact" className="hire-btn font-semibold">Hire Me</Link>
                    </motion.button>

                    {/* Mobile Menu */}

                    <button
                        className="menu-btn"
                        onClick={() =>
                            setIsOpen(true)
                        }
                    >
                        <HiMenuAlt3 />
                    </button>

                </div>
            </motion.header>

            {/* Sidebar */}

            <AnimatePresence>

                {isOpen && (
                    <>
                        <motion.div
                            className="overlay show-overlay"
                            onClick={() =>
                                setIsOpen(false)
                            }
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        />

                        <motion.aside
                            className="mobile-sidebar sidebar-open"
                            initial={{
                                x: "100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <div className="sidebar-header">

                                <h2>Menu</h2>

                                <button
                                    onClick={() =>
                                        setIsOpen(
                                            false
                                        )
                                    }
                                    className="close-btn"
                                >
                                    <HiX />
                                </button>

                            </div>

                            <nav className="sidebar-nav">

                                {navLinks.map(
                                    (
                                        link,
                                        index
                                    ) => (
                                        <motion.div
                                            className="sidebar-link-wrapper"
                                            key={link.path}
                                            initial={{
                                                opacity: 0,
                                                x: 30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: index * 0.08,
                                            }}
                                        >
                                            <NavLink
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "sidebar-link active"
                                                        : "sidebar-link"
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        </motion.div>
                                    )
                                )}

                                <Link
                                    to="/contact"
                                    className="sidebar-btn font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Hire Me
                                </Link>

                            </nav>
                        </motion.aside>
                    </>
                )}

            </AnimatePresence>
        </>
    );
};

export default Navbar;