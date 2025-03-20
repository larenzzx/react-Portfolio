import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LiveView } from "./LiveView";

export const ProjectCard = ({
  projectImg,
  projectDetail,
  projectTitle,
  projectRole,
  liveView
}) => {
  return (
    <div className="card glass w-96">
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
  );
};
