import AboutCTA from "../components/AboutPage/AboutCTA/AboutCTA";
import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import EducationExperience from "../components/AboutPage/EducationExperience/EducationExperience";
import Journey from "../components/AboutPage/Journey/Journey";
import WhyWorkWithMe from "../components/AboutPage/WhyWorkWithMe/WhyWorkWithMe";

const About = () => {
  return (
    <>
      <AboutHero />
      <Journey/>
      <EducationExperience/>
      <WhyWorkWithMe/>
      <AboutCTA/>
    </>
  );
};

export default About;