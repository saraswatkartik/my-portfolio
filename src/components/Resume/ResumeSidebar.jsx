import {
    FaGlobe,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaCode,
    FaGraduationCap,
    FaTrophy,
} from "react-icons/fa";

import { motion } from "framer-motion";

const ResumeSidebar = () => {

    const skills = [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "PHP (Basic)",
        "MySQL",
        "WordPress",
        "DBMS",
        "MongoDB",
        "Git",
        "GitHub",
        "Vercel",
        "Render",
    ];

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -50,
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
            bg-slate-900/70
            border-r
            border-white/10
            p-8
            "
        >

            {/* CONTACT */}

            <div className="mb-10">

                <h3
                    className="
                    flex
                    items-center
                    gap-3
                    text-indigo-500
                    font-bold
                    text-xl
                    mb-5
                    "
                >
                    <FaGlobe />
                    CONTACT
                </h3>

                <div className="space-y-4 text-slate-300">

                    <p className="flex items-center gap-3 mb-0">
                        <a href="tel:+918527606714" target="_blank">
                            <FaPhoneAlt className="text-indigo-500" />
                            +91 8527606714
                        </a>
                    </p>

                    <p className="flex items-center gap-3 break-all mb-0">
                        <a href="mailto:kartiksaraswat882003@gmail.com" target="_blank">
                            <FaEnvelope className="text-indigo-500" />
                            kartiksaraswat882003@gmail.com
                        </a>
                    </p>

                    <p className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-indigo-500" />
                        Ghaziabad, UP
                    </p>

                    <a
                        href="https://www.linkedin.com/in/kartik-saraswat-283b73373/"
                        target="_blank"
                        className="
                        flex
                        items-center
                        gap-3
                        hover:text-indigo-400
                        transition
                        "
                    >
                        <FaLinkedin className="text-indigo-500" />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/saraswatkartik"
                        target="_blank"
                        className="
                        flex
                        items-center
                        gap-3
                        hover:text-indigo-400
                        transition
                        "
                    >
                        <FaGithub className="text-indigo-500" />
                        GitHub
                    </a>

                </div>

            </div>

            {/* SKILLS */}

            <div className="mb-10">

                <h3
                    className="
                    flex
                    items-center
                    gap-3
                    text-indigo-500
                    font-bold
                    text-xl
                    mb-5
                    "
                >
                    <FaCode />
                    SKILLS
                </h3>

                <div className="flex flex-wrap gap-3">

                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="
                            px-3
                            py-2
                            text-sm
                            rounded-lg
                            border
                            border-white/10
                            bg-slate-800/50
                            text-slate-300
                            hover:border-indigo-500
                            hover:text-white
                            transition
                            "
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </div>

            {/* EDUCATION */}

            <div className="mb-10">

                <h3
                    className="
                    flex
                    items-center
                    gap-3
                    text-indigo-500
                    font-bold
                    text-xl
                    mb-5
                    "
                >
                    <FaGraduationCap />
                    EDUCATION
                </h3>

                <div className="space-y-5">

                    <div>
                        <h4 className="text-white font-semibold">
                            MCA (Pursuing)
                        </h4>

                        <p className="text-slate-400 text-sm">
                            AKTU
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold">
                            BCA
                        </h4>

                        <p className="text-slate-400 text-sm">
                            CCS University • 2025
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold">
                            Intermediate
                        </h4>

                        <p className="text-slate-400 text-sm">
                            CBSE • 2021
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold">
                            High School
                        </h4>

                        <p className="text-slate-400 text-sm">
                            CBSE • 2019
                        </p>
                    </div>

                </div>

            </div>

            {/* STRENGTHS */}

            <div>

                <h3
                    className="
                    flex
                    items-center
                    gap-3
                    text-indigo-500
                    font-bold
                    text-xl
                    mb-5
                    "
                >
                    <FaTrophy />
                    STRENGTHS
                </h3>

                <ul
                    className="
                    list-disc
                    pl-5
                    text-slate-300
                    space-y-3
                    "
                >
                    <li>Quick Learner</li>
                    <li>Problem Solving</li>
                    <li>Self Motivated</li>
                    <li>Team Collaboration</li>
                    <li>Research & Planning</li>
                </ul>

            </div>

        </motion.div>
    );
};

export default ResumeSidebar;