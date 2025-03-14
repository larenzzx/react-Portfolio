import { SectionTitle } from "../SectionTitle";

// frontend logos
import htmlLogo from "../../assets/html5.svg";
import cssLogo from "../../assets/css_old.svg";
import jsLogo from "../../assets/javascript.svg";
import tailwindLogo from "../../assets/tailwindcss.svg";
import reactLogo from "../../assets/react_dark.svg";
import daisyLogo from "../../assets/daisyui.svg";
import headlessLogo from "../../assets/headlessui.svg";
import chartLogo from "../../assets/chartjs.svg";
import sweetLogo from "../../assets/SweetAlert2.png";
import swipeLogo from "../../assets/swiper-logo.svg";
import dataTable from "../../assets/datatables.svg";

// backend logos
import phpLogo from "../../assets/php_dark.svg";
import pythonLogo from "../../assets/python.svg";
import sqlLogo from "../../assets/mysql.svg";
import djangoLogo from "../../assets/django.svg";

// git logos
import gitLogo from "../../assets/git.svg";
import githubLogo from "../../assets/github-dark.svg";

import { SkillInfo } from "./Skill-info";
import { SkillLogo } from "./Skill-logo";

export const Skills = () => {
  return (
    <div className="container min-h-screen">
      <SectionTitle id="skills" title="Skills" />

      <div className="mt-8 text-center">
        <div className="mb-8 text-center">
          <SkillInfo info="Frontend Development" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={htmlLogo} tooltip="HTML" />
            <SkillLogo logos={cssLogo} tooltip="CSS" />
            <SkillLogo logos={jsLogo} tooltip="JavaScript" />
            <SkillLogo logos={tailwindLogo} tooltip="TailwindCSS" />
            <SkillLogo logos={reactLogo} tooltip="ReactJS" />
            <SkillLogo logos={daisyLogo} tooltip="daisyUI" />
            <SkillLogo logos={headlessLogo} tooltip="HeadlessUI" />
            <SkillLogo logos={chartLogo} tooltip="chartJS" />
            <SkillLogo logos={dataTable} tooltip="DataTablesJS" />
            <SkillLogo logos={swipeLogo} tooltip="SwiperJS" />
            <SkillLogo logos={sweetLogo} tooltip="sweetalert2" />
          </div>
        </div>

        <div className="text-center">
          <SkillInfo info="Backend Development" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={phpLogo} tooltip="PHP" />
            <SkillLogo logos={pythonLogo} tooltip="python" />
            <SkillLogo logos={sqlLogo} tooltip="MySQL" />
            <SkillLogo logos={djangoLogo} tooltip="django" />
          </div>
        </div>

        <div className="text-center">
          <SkillInfo info="Version Control & Collaboration" />
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <SkillLogo logos={gitLogo} tooltip="GIT" />
            <SkillLogo logos={githubLogo} tooltip="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};
