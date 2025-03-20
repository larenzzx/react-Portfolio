import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LiveView } from "./LiveView";
import { ObserverProvider } from "../ObserverProvider";

export const ProjectCard = ({
  projectImg,
  projectDetail,
  projectTitle,
  projectRole,
  liveView,
}) => {
  return (
    <ObserverProvider>
      <div className="card glass w-96 intersect-once intersect:motion-translate-y-in-100 intersect:motion-duration-[2s] intersect:motion-ease-spring-smooth">
        <figure>
          <img className="h-56 w-96 object-cover" src={projectImg} alt="" />
        </figure>
        <div className="card-body">
          <p className="badge badge-secondary">{projectDetail}</p>
          <h2 className="card-title text-sm sm:text-base md:text-xl">
            {projectTitle}
          </h2>
          <p className="text-xs sm:text-sm md:text-base">Role: {projectRole}</p>
          <div className="card-actions justify-end">
            <a
              href="#"
              className="badge badge-outline flex items-center justify-center gap-x-1 py-3"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>

            <LiveView isLiveView={liveView} />
          </div>
        </div>
      </div>
    </ObserverProvider>
  );
};
