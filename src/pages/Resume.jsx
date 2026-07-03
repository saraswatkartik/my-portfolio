import ResumeHeader from "../components/Resume/ResumeHeader";
import ResumeSidebar from "../components/Resume/ResumeSidebar";
import ResumeExperience from "../components/Resume/ResumeExperience";
import ResumeProjects from "../components/Resume/ResumeProjects";

const Resume = () => {
    return (
        <section className="min-h-screen bg-slate-950 px-5 py-10">

            <div className="max-w-7xl mx-auto">

                <ResumeHeader />

                <div
                    className="
                    mt-6
                    grid
                    lg:grid-cols-[320px_1fr]
                    border
                    border-white/10
                    rounded-3xl
                    overflow-hidden
                    "
                >

                    <ResumeSidebar />

                    <div
                        className="
                        bg-gradient-to-r
                        from-slate-950
                        to-slate-900
                        p-8
                        "
                    >
                        <ResumeExperience />
                        <ResumeProjects />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Resume;