import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profileImg from "../../assets/images/Home/img-1.png";

const ResumeHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-slate-950
            via-slate-900
            to-slate-950
            p-8
            "
        >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                <div className="flex flex-col lg:flex-row items-center gap-6">

                    <img
                        src={profileImg}
                        alt="Kartik"
                        className="
                        w-36
                        h-36
                        rounded-full
                        border-4
                        border-indigo-500
                        object-cover
                        "
                    />

                    <div>

                        <h1
                            className="
                            text-5xl
                            font-bold
                            text-white
                            "
                        >
                            Kartik{" "}
                            <span className="text-indigo-500">
                                Saraswat
                            </span>
                        </h1>

                        <h2
                            className="
                            text-2xl
                            font-semibold
                            text-slate-300
                            mt-2
                            "
                        >
                            Full Stack Web Developer
                        </h2>

                        <p
                            className="
                            text-slate-400
                            mt-4
                            max-w-2xl
                            "
                        >
                            Passionate MERN Stack Developer
                            with expertise in building
                            responsive and scalable web
                            applications using React,
                            Node.js, Express and MongoDB.
                        </p>

                    </div>

                </div>

                <a
                    href="/kartik-resume.pdf"
                    download="Kartik-Saraswat-resume.pdf"
                    className="
                    flex
                    items-center
                    gap-3
                    bg-indigo-600
                    hover:bg-indigo-500
                    transition
                    px-6
                    py-4
                    rounded-2xl
                    text-white
                    font-semibold
                    "
                >
                    <FaDownload />
                    Download Resume
                </a>

            </div>
        </motion.div>
    );
};

export default ResumeHeader;