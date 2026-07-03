import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./FAQSection.css";

const faqs = [
    {
        question: "How quickly do you respond?",
        answer:
            "I usually respond within 24 hours for project inquiries and collaborations.",
    },
    {
        question: "Are you available for freelance projects?",
        answer:
            "Yes, I am available for freelance work, internships and collaboration opportunities.",
    },
    {
        question: "What technologies do you work with?",
        answer:
            "I primarily work with React, Node.js, Express, MongoDB, JavaScript and modern web technologies.",
    },
    {
        question: "Can you build full-stack applications?",
        answer:
            "Yes. I build complete MERN stack applications including frontend, backend, database and deployment.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(
            activeIndex === index ? null : index
        );
    };

    return (
        <section className="faq-section">

            <div className="faq-container">

                <motion.div
                    className="faq-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <span>FAQs</span>

                    <h2>
                        Frequently Asked Questions
                    </h2>

                    <p>
                        Some common questions people ask before
                        working with me.
                    </p>

                </motion.div>

                <div className="faq-list">

                    {faqs.map((faq, index) => (

                        <motion.div
                            key={index}
                            className="faq-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >

                            <button
                                className="faq-question"
                                onClick={() =>
                                    toggleFAQ(index)
                                }
                            >

                                <span>
                                    {faq.question}
                                </span>

                                <FaChevronDown
                                    className={`faq-arrow ${activeIndex === index ? "active" : ""
                                        }`}
                                />

                            </button>

                            <AnimatePresence>

                                {activeIndex === index && (

                                    <motion.div
                                        className="faq-answer"
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >

                                        <p>{faq.answer}</p>

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;