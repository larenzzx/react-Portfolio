import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImg from "../assets/me.jpg";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className="container min-h-screen">
        <div
          id="about"
          className="grid place-items-center pb-6 pt-24 text-5xl font-bold text-secondary"
        >
          <h1>About Me</h1>
        </div>
        <div className="hero">
          <div className="hero-content flex-col gap-12 lg:flex-row">
            <img src={myImg} className="max-w-xs rounded-lg shadow-2xl" />
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-semibold">
                {/* I am <span className="text-primary">Mark Larenz Tabotabo</span> */}
                Mark Larenz Tabotabo
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="space-x-4 text-2xl text-primary animate-bounce">
                <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
