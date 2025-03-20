import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { ObserverProvider } from "../ObserverProvider";

import htmlLogo from "../../assets/html5.svg";
import myImg from "../../assets/me.jpg";
import heroImg from "../../assets/hero.jpg";

export const Projects = () => {
  return (
    <div className="container min-h-screen">
      <SectionTitle id="projects" title="Projects" />

      <ObserverProvider>
        <div className="flex flex-wrap justify-center gap-6 py-6 md:gap-8 intersect-once intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth">
          <ProjectCard
            projectImg={heroImg}
            projectDetail={"Capstone Project"}
            projectTitle={"One Zamboanga: Evacuation Center Management System"}
            projectRole={"Full-stack Developer"}
            liveView={false}
          />

          <ProjectCard
            projectImg={htmlLogo}
            projectDetail={"Capstone Project"}
            projectTitle={"One Zamboanga: Evacuation Center Management System"}
            projectRole={"Full-stack Developer"}
            liveView={true}
          />

          <ProjectCard
            projectImg={myImg}
            projectDetail={"Capstone Project"}
            projectTitle={"One Zamboanga: Evacuation Center Management System"}
            projectRole={"Full-stack Developer"}
            liveView={true}
          />

          <ProjectCard
            projectImg={heroImg}
            projectDetail={"Capstone Project"}
            projectTitle={"One Zamboanga: Evacuation Center Management System"}
            projectRole={"Full-stack Developer"}
            liveView={false}
          />
        </div>
      </ObserverProvider>
    </div>
  );
};
