import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImg from "../assets/me.jpg";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

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
                Mark Larenz Tabotabo
              </h1>
              <p className="py-6">
                I am a passionate web developer with a strong focus on <span className="text-primary">frontend
                development</span>, crafting intuitive and user-friendly interfaces.
                While frontend is my primary expertise, I am continuously honing
                my backend skills to become a well-rounded <span className="text-primary">full-stack developer</span>.
                My ultimate goal is to grow into a skilled and reliable <span className="text-primary">software
                engineer</span>, capable of building efficient and scalable solutions.
                I am always eager to learn, adapt, and improve my craft to keep
                up with the ever-changing world of technology.
              </p>
              <div className="mb-8 animate-bounce space-x-4 text-2xl text-primary">
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
              <Button btn="Contact Me" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
