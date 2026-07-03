import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;