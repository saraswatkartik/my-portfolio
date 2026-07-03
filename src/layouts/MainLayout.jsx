import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main className="pt-20 min-h-screen bg-slate-950 text-white overflow-x-hidden">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;