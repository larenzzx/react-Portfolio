import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImg from "../assets/kwon.jpg";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


import heroImg from "../assets/hero.jpg";

import TypingAnimation from "./TypingAnimation";

function Hero() {
  return (
    // <div className="hero min-h-screen container">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //         <img
    //             src={myImg}
    //             className="max-w-xs rounded-lg shadow-2xl"
    //         />
    //         <div className='text-center lg:text-left'>
    //             <h1 className="text-5xl font-bold">Hello, <span className='text-primary'>I'm a developer</span></h1>
    //             <p className="py-6 lg:w-[50%]">
    //                 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
    //                 quasi. In deleniti eaque aut repudiandae et a id nisi.
    //             </p>
    //             <div className='space-x-4'>
    //                 <FontAwesomeIcon icon={faFacebook} className='text-2xl text-primary' />
    //                 <FontAwesomeIcon icon={faGithub} className='text-2xl text-primary' />
    //                 <FontAwesomeIcon icon={faTwitter} className='text-2xl text-primary' />
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(" + heroImg + ")",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md md:max-w-lg">
          {/* <h1 className="cssanimation typing mb-5 inline-block w-[320px] text-5xl font-bold">
            Hi, <span className="text-secondary">I'm Larenz</span>
          </h1> */}
          <h1 className="mb-5 flex items-center justify-center gap-x-2 text-2xl font-bold md:text-5xl">
            Hi, <TypingAnimation />
          </h1>
          {/* <TypingAnimation /> */}
          {/* <p className="mb-5 text-base font-medium md:text-lg">
            Actively honing my skills to become a reliable <br />{" "}
            <span className="text-primary">Full-Stack Web Developer</span>.
          </p> */}
          {/* <div className="space-x-4">
            <a
              href="https://www.facebook.com/marklarenz.tabotabo"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="animate-bounce text-2xl text-primary"
              />
            </a>
            <a href="https://github.com/larenzzx" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="animate-bounce text-2xl text-primary"
              />
            </a>

            <FontAwesomeIcon
              icon={faTwitter}
              className="animate-bounce text-2xl text-primary"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
