import { motion } from "framer-motion";
import {
    FaCode,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

const ResumeProjects = () => {

    const projects = [
        {
            title: "Siddhpeeth Shri Sai Kalka Mandir",
            featured: true,
            description:
                "Complete MERN Stack Temple Management System with token registration, admin dashboard, contact form, registration management and MongoDB integration.",

            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
            ],

            live: "#",
            github: "#",
        },

        {
            title: "Online Submission Form",
            description:
                "Responsive PHP & MySQL form with validation, database connectivity and user data management.",

            tech: [
                "PHP",
                "MySQL",
                "Bootstrap",
            ],
        },

        {
            title: "Portfolio Website",
            description:
                "Modern developer portfolio built with React, Tailwind CSS and Framer Motion.",

            tech: [
                "React",
                "Tailwind",
                "Framer Motion",
            ],
        },

        {
            title: "Bakery Website",
            description:
                "Responsive bakery website with reservation and contact forms using Bootstrap 5.",

            tech: [
                "HTML",
                "CSS",
                "Bootstrap",
            ],
        },
    ];

    return (
        <section className="mt-20">

            <motion.h2
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
                    duration: .6,
                }}
                className="
                flex
                items-center
                gap-3
                text-3xl
                font-bold
                text-white
                mb-10
                "
            >
                <span
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-violet-600
                    flex
                    items-center
                    justify-center
                    "
                >
                    <FaCode />
                </span>

                Projects
            </motion.h2>

            {/* Featured Project */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: .7,
                }}
                className="
                p-8
                rounded-3xl
                border
                border-indigo-500/30
                bg-gradient-to-r
                from-indigo-500/10
                to-violet-500/10
                mb-8
                "
            >

                <span
                    className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    bg-indigo-500/20
                    text-indigo-400
                    mb-5
                    "
                >
                    Featured Project
                </span>

                <h3
                    className="
                    text-3xl
                    font-bold
                    text-white
                    "
                >
                    Siddhpeeth Shri Sai Kalka Mandir
                </h3>

                <p
                    className="
                    mt-4
                    text-slate-300
                    leading-relaxed
                    "
                >
                    Complete MERN Stack Temple Management
                    System with token registration,
                    admin dashboard, registration
                    management, contact form integration,
                    MongoDB Atlas and modern responsive UI.
                </p>

                <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                    "
                >
                    {[
                        "React",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "JWT",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="
                            px-4
                            py-2
                            rounded-lg
                            bg-white/5
                            border
                            border-white/10
                            text-slate-300
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div
                    className="
                    flex
                    gap-4
                    mt-8
                    flex-wrap
                    "
                >

                    <a
                        href="https://shrisaikalkamandir.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        bg-indigo-600
                        hover:bg-indigo-500
                        transition
                        text-white
                        "
                    >
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/saraswatkartik/siddhpeeth-shri-sai-kalka-mandir-website"
                        target="_blank"
                        className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        border
                        border-white/10
                        hover:border-indigo-500
                        transition
                        text-white
                        "
                    >
                        <FaGithub />
                        GitHub
                    </a>

                </div>

            </motion.div>

            {/* Other Projects */}

            <div
                className="
                grid
                md:grid-cols-2
                gap-6
                "
            >

                {projects
                    .filter(
                        (project) =>
                            !project.featured
                    )
                    .map(
                        (
                            project,
                            index
                        ) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: .5,
                                    delay:
                                        index *
                                        .15,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="
                                p-6
                                rounded-3xl
                                border
                                border-white/10
                                bg-slate-900/50
                                hover:border-indigo-500/50
                                transition-all ease-in-out duration-5
                                "
                            >

                                <h3
                                    className="
                                    text-xl
                                    font-semibold
                                    text-white
                                    "
                                >
                                    {
                                        project.title
                                    }
                                </h3>

                                <p
                                    className="
                                    mt-4
                                    text-slate-400
                                    leading-relaxed
                                    "
                                >
                                    {
                                        project.description
                                    }
                                </p>

                                <div
                                    className="
                                    flex
                                    flex-wrap
                                    gap-2
                                    mt-5
                                    "
                                >
                                    {project.tech.map(
                                        (
                                            tech
                                        ) => (
                                            <span
                                                key={
                                                    tech
                                                }
                                                className="
                                                px-3
                                                py-1
                                                rounded-lg
                                                text-sm
                                                bg-white/5
                                                text-slate-300
                                                "
                                            >
                                                {
                                                    tech
                                                }
                                            </span>
                                        )
                                    )}
                                </div>

                            </motion.div>
                        )
                    )}

            </div>

        </section>
    );
};

export default ResumeProjects;