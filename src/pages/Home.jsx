import AboutPreview from "../components/HomePage/AboutPreview/AboutPreview";
import ContactCTA from "../components/HomePage/ContactCTA/ContactCTA";
import FeaturedProjects from "../components/HomePage/FeaturedProjects/FeaturedProjects";
import Hero from "../components/HomePage/Hero/Hero";
import Skills from "../components/HomePage/Skills/Skills";

const Home = () => {
    return (
        <>
            <Hero />
            <AboutPreview />
            <Skills />
            <FeaturedProjects />
            <ContactCTA />
        </>
    );
};

export default Home;