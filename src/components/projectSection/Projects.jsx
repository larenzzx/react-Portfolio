import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";
import oneZambo from "../../assets/oneZambo.svg";
import oneZamboanga from "../../assets/oneZamboanga.svg";
import elective from "../../assets/elective.svg";
import heroImg from "../../assets/hero.jpg";

export const Projects = () => {
  return (
    <div className="container min-h-screen">
      <SectionTitle id="projects" title="Projects" />

      <div className="flex flex-wrap justify-center gap-6 py-6 md:gap-8">
    
        <ProjectCard projectImg={oneZamboanga} projectDetail={"Capstone Project"} projectTitle={"One Zamboanga: Evacuation Center Management System"} projectRole={"Full-stack Developer"} link={"https://github.com/larenzzx/oneZamboanga_capstone"} liveView={false}  />

        <ProjectCard projectImg={elective} projectDetail={"Capstone Project"} projectTitle={"One Zamboanga: Evacuation Center Management System"} projectRole={"Full-stack Developer"} link={"https://github.com/larenzzx/tabotabo_portfolioWebsite"} liveView={true} liveLink={"https://larenzzx.github.io/tabotabo_portfolioWebsite/"}  />

        <ProjectCard projectImg={oneZambo} projectDetail={"Capstone Project"} projectTitle={"One Zamboanga: Evacuation Center Management System"} projectRole={"Full-stack Developer"} liveView={true}  />

        <ProjectCard projectImg={heroImg} projectDetail={"Capstone Project"} projectTitle={"One Zamboanga: Evacuation Center Management System"} projectRole={"Full-stack Developer"} liveView={false}  />
      </div>
    </div>
  );
};
