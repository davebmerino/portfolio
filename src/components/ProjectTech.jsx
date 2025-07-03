function ProjectTech({ pData }) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center ">
        {pData.techTools.map((tool, index) => (
          <li
            key={index}
            className="flex items-center gap-2 border border-b p-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-xs text-[#f5b754]">{tool.icon}</span>
            <span className="text-[10px] font-bold">{tool.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectTech;
