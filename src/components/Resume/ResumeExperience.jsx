import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const ResumeExperience = () => {
    return (
        <section>

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
                    duration: 0.6,
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
                    bg-indigo-600
                    flex
                    items-center
                    justify-center
                    "
                >
                    <FaBriefcase />
                </span>

                Experience
            </motion.h2>

            {/* Timeline */}

            <div className="relative pl-12">

                {/* Line */}

                <div
                    className="
                    absolute
                    left-4
                    top-0
                    bottom-0
                    w-[2px]
                    bg-white/10
                    "
                />

                {/* Experience Item */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                    relative
                    mb-14
                    "
                >

                    {/* Dot */}

                    <div
                        className="
                        absolute
                        -left-[42px]
                        top-2

                        w-5
                        h-5

                        rounded-full

                        bg-indigo-500

                        shadow-[0_0_20px_rgba(99,102,241,0.8)]
                        "
                    />

                    <h3
                        className="
                        text-3xl
                        font-bold
                        text-white
                        "
                    >
                        Web Development Intern
                    </h3>

                    <p
                        className="
                        text-indigo-400
                        font-medium
                        mt-2
                        "
                    >
                        MIRASHKA • 6 Months
                    </p>

                    <ul
                        className="
                        mt-5
                        space-y-3
                        text-slate-300
                        leading-relaxed
                        "
                    >
                        <li>
                            • Designed responsive web pages using
                            HTML, CSS, Bootstrap 5 and Tailwind CSS.
                        </li>

                        <li>
                            • Developed responsive web forms using
                            HTML, Bootstrap, PHP and MySQL.
                        </li>

                        <li>
                            • Created responsive HTML email templates.
                        </li>

                        <li>
                            • Collaborated with team members on
                            UI/UX implementation.
                        </li>

                        <li>
                            • Assisted in debugging and
                            performance optimization.
                        </li>
                    </ul>

                </motion.div>

                {/* Experience Item 2 */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="
                    relative
                    "
                >

                    <div
                        className="
                        absolute
                        -left-[42px]
                        top-2

                        w-5
                        h-5

                        rounded-full

                        bg-violet-500

                        shadow-[0_0_20px_rgba(139,92,246,0.8)]
                        "
                    />

                    <h3
                        className="
                        text-3xl
                        font-bold
                        text-white
                        "
                    >
                        MERN Stack Developer
                    </h3>

                    <p
                        className="
                        text-violet-400
                        font-medium
                        mt-2
                        "
                    >
                        Personal Projects & Freelance Learning
                    </p>

                    <ul
                        className="
                        mt-5
                        space-y-3
                        text-slate-300
                        leading-relaxed
                        "
                    >
                        <li>
                            • Built Siddhpeeth Shri Sai Kalka
                            Mandir Management System.
                        </li>

                        <li>
                            • Developed Registration System with
                            Token Generation.
                        </li>

                        <li>
                            • Created Admin Dashboard with
                            Search, Status Management and Analytics.
                        </li>

                        <li>
                            • Connected Backend with
                            MongoDB Atlas Database.
                        </li>

                        <li>
                            • Built scalable full-stack applications
                            using React, Node.js, Express and MongoDB.
                        </li>
                    </ul>

                </motion.div>

            </div>

        </section>
    );
};

export default ResumeExperience;