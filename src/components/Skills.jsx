import { SectionTitle } from "./SectionTitle";

// frontend logos
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css_old.svg";
import jsLogo from "../assets/javascript.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import reactLogo from "../assets/react_dark.svg";
import daisyLogo from "../assets/daisyui.svg";
import headlessLogo from "../assets/headlessui.svg";
import materialLogo from "../assets/materialui.svg";

// backend logos
import phpLogo from "../assets/php_dark.svg";
import pythonLogo from "../assets/python.svg";
import sqlLogo from "../assets/mysql.svg";

// git logos
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github-dark.svg";

import { SkillInfo } from "./Skill-info";
import { SkillLogo } from "./Skill-logo";

export const Skills = () => {
  return (
    <div className="container min-h-screen">
      <SectionTitle id="skills" title="Skills" />

      <div className="text-center mt-8">
        <div className="text-center mb-8">
          <SkillInfo info="Frontend Development" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={htmlLogo} />
            <SkillLogo logos={cssLogo} />
            <SkillLogo logos={jsLogo} />
            <SkillLogo logos={tailwindLogo} />
            <SkillLogo logos={reactLogo} />
            <SkillLogo logos={daisyLogo} />
            <SkillLogo logos={headlessLogo} />
            <SkillLogo logos={materialLogo} />
          </div>
        </div>

        <div className="text-center">
          <SkillInfo info="Backend Development" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={phpLogo} />
            <SkillLogo logos={pythonLogo} />
            <SkillLogo logos={sqlLogo} />
          </div>
        </div>

        <div className="text-center">
          <SkillInfo info="Version Control & Collaboration" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={gitLogo} />
            <SkillLogo logos={githubLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};