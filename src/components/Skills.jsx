import SubTitle from "./SubTitle";
import TitleText from "./TitleText";
import { motion } from "framer-motion";

import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandReact,
  TbBrandCss3,
} from "react-icons/tb";

import {
  FaShopify,
  FaPhp,
  FaDatabase,
  FaFileExcel,
  FaChartBar,
  FaCode,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import SkillCard from "./SkillCard";

function Skills() {
  const skillsIconClass = [
    {
      name: "JavaScript",
      Icon: TbBrandJavascript,
      level: "intermediate",
    },
    {
      name: "React",
      Icon: TbBrandReact,
      level: "intermediate",
    },
    {
      name: "HTML",
      Icon: TbBrandHtml5,
      level: "advanced",
    },
    {
      name: "CSS",
      Icon: TbBrandCss3,
      level: "intermediate",
    },
    {
      name: "Shopify",
      Icon: FaShopify,
      level: "intermediate",
    },
    {
      name: "PHP",
      Icon: FaPhp,
      level: "intermediate",
    },
    {
      name: "MySQL",
      Icon: FaDatabase,
      level: "advanced",
    },
    {
      name: "Excel",
      Icon: FaFileExcel,
      level: "intermediate",
    },
    {
      name: "Power BI",
      Icon: FaChartBar,
      level: "beginner",
    },
    {
      name: "VS Code",
      Icon: FaCode,
      level: "intermediate",
    },
    {
      name: "GitHub",
      Icon: FaGithub,
      level: "beginner",
    },
    {
      name: "NPM",
      Icon: FaNpm,
      level: "intermediate",
    },
  ];

  const divMotionUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  };

  const divMotionDown = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
  };

  return (
    <>
      <section className="flex flex-col max-w-4xl mx-auto items-center justify-center bg-[#f2f2f2] rounded-lg shadow-lg p-6 my-15">
        <motion.div
          variants={divMotionUp}
          className="flex flex-col  justify-center text-center"
        >
          <SubTitle subTitle="Tech Stack" />
          <TitleText title="My" span="Skills" />
        </motion.div>
        <motion.div
          variants={divMotionDown}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-5"
        >
          {skillsIconClass.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Skills;
