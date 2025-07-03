import { useState } from "react";
import About from "./About";

import {
  FcBusinessman,
  FcBusiness,
  FcGraduationCap,
  FcCamcorderPro,
} from "react-icons/fc";

function Abouts() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  const aboutMe = [
    {
      icon: <FcBusinessman />,
      title: "About Me",
      answer:
        "I'm DAVE B MERINO I hold a Bachelor Degree in Bacholer of Sceince In Information Technology, someone who’s always been curious about the world and eager to learn new things. I’m particularly passionate about learning anything related to my field in Information Technology.",
    },
    {
      icon: <FcBusiness />,
      title: "Career",
      answer:
        "I’ve worked as a Technical Support Specialist for 3 years and as a Support Engineer for a few months. Also, a partime web dev/designer for few months. Now, I’m transitioning my skills into web design/development. ",
    },
    {
      icon: <FcCamcorderPro />,
      title: "Hobbies",
      answer:
        "I Love spending my time riding motorcycles and playing video games. A fun fact about me is that I used to be able to spend 24 hours straight playing computer games!",
    },
    {
      icon: <FcGraduationCap />,
      title: "Education",
      answer:
        "Bacholer of Sceince In Information Technology, from University of Rizal System binangona campus batch 2015-2019",
    },
  ];
  return (
    <>
      <section className="max-w-5xl mx-auto bg-[#f2f2f2] rounded-lg shadow-lg p-10  mt-20">
        <div className=" w-full max-w-4xl mx-auto px-2 flex flex-col md:flex-col-2 justify-between">
          {aboutMe.map((about, index) => (
            <About
              key={about.title}
              about={about}
              isOpen={activeIndex === index}
              onToggle={() => toggleIndex(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Abouts;
