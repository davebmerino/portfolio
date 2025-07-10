import MyProjects from "../components/MyProjects";
import ScrollFadeIn from "../components/ScrollFadeIn";
import ProjectHero from "../components/ProjectHero";

//Import Images
import eskinaGloria from "../images/eskinagloria.png";
import cebuDonRental from "../images/ceburental.png";
import foodApp from "../images/FoodApp.png";
import shopifymain from "../images/shopifymain.png";
import movieFight from "../images/apifetch.png";
import floppyBird from "../images/floppybird.png";
import labogon from "../images/labogonwebsite.png";

// Import Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaShopify,
  FaGithub,
  FaReact,
} from "react-icons/fa";

import {
  SiNetlify,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiPhp,
} from "react-icons/si";

function Projects() {
  const projectData = [
    {
      name: "Cebu Don moto rental",
      description:
        "This Project showcase my skills on React JS and Tailwindcss with a backend using subapbase. This one is currently on progress",
      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Tailwindcss", icon: <SiTailwindcss /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Github", icon: <FaGithub /> },
      ],
      image: cebuDonRental,
    },

    {
      name: "The Fat Chair ",
      description:
        "I'm a part of this project were we create this back when I am a web developer in custom mertal work",
      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "Shopify", icon: <FaShopify /> },
      ],
      image: shopifymain,
    },

    {
      name: "Recipe Food App",
      description:
        "This showcase my skills using React and tailwindcss with fetching API ",
      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Tailwindcss", icon: <SiTailwindcss /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Github", icon: <FaGithub /> },
      ],
      image: foodApp,
    },

    {
      name: "Movie Fight",
      description:
        "Last year created this web app to showcase my skills in API fecthing using javascript and html",

      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "Github", icon: <FaGithub /> },
      ],
      image: movieFight,
    },
    {
      name: "Labogon website",
      description:
        "I help a group of student to create a web app that mets the requirement features",

      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
      image: labogon,
    },

    {
      name: "Eskina Gloria",
      description:
        "Created this to protice my skill for HTML, CSS and JavaScript",

      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "NETLIFY", icon: <SiNetlify /> },
      ],
      image: eskinaGloria,
    },

    {
      name: "Floppy bird",
      description: "This project excise my knowlegde in javacript animation",
      techTools: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "JavaScipt", icon: <SiJavascript /> },
        { name: "Github", icon: <FaGithub /> },
      ],
      image: floppyBird,
    },
  ];

  return (
    <>
      <ScrollFadeIn>
        <ProjectHero projectData={projectData} />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <MyProjects projectData={projectData} />
      </ScrollFadeIn>
    </>
  );
}

export default Projects;
