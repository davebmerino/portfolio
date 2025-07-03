function SkillCard({ skill }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <skill.Icon className="text-4xl text-[#f5b754] mx-auto" />
      <h3 className="text-lg font-semibold text-center ">{skill.name}</h3>

      <div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden mt-4">
        <div
          className={`h-full rounded-full ${
            skill.level === "beginner"
              ? "w-1/3 bg-red-500"
              : skill.level === "intermediate"
              ? "w-2/3 bg-green-500"
              : "w-full bg-yellow-500"
          }`}
        ></div>
      </div>
      <div className="text-sm text-gray-600 mt-1 capitalize">{skill.level}</div>
    </div>
  );
}

export default SkillCard;
