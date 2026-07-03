import FeaturedProject from "../components/ProjectsPage/FeaturedProject/FeaturedProject";
import ProjectsCTA from "../components/ProjectsPage/ProjectsCTA/ProjectsCTA";
import ProjectsGrid from "../components/ProjectsPage/ProjectsGrid/ProjectsGrid";
import ProjectsHero from "../components/ProjectsPage/ProjectsHero/ProjectsHero";

const Projects = () => {
  return (
    <>
      <ProjectsHero />
      <FeaturedProject/>
      <ProjectsGrid/>
      <ProjectsCTA/>
    </>
  );
};

export default Projects;