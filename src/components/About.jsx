import SubTitle from "./SubTitle";

function About({ about, isOpen, onToggle }) {
  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-bold flex items-center gap-2">
          {about.icon} {about.title}
        </h3>
        <span className="text-3xl text-[#f5b754] select-none">
          {isOpen ? "–" : "+"}
        </span>
      </div>

      {/* Slide-down animation using Tailwind transitions */}
      <div
        className={`transition-all duration-300 overflow-hidden  ${
          isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <SubTitle subTitle={about.answer} />
      </div>
    </div>
  );
}

export default About;
