import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Destoplinks() {
  const navigate = useNavigate();

  const handleHireMeClick = useCallback(() => {
    navigate("/?scrollToContact=true");
  }, [navigate]);

  const navLinkClass = "text-[#0f172a] hover:text-[#64748b] transition-colors";
  const activeClass = "text-[#e0a841] font-semibold";

  return (
    <>
      <div className="hidden lg:flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : ""}`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : ""}`
          }
        >
          Projects
        </NavLink>

        <button
          onClick={handleHireMeClick}
          className="bg-[#f5b754] cursor-pointer hover:bg-[#e0a841] transition-all px-6 py-3 text-white font-medium rounded-full text-sm w-full md:w-auto"
        >
          Hire Me
        </button>
      </div>
    </>
  );
}

export default Destoplinks;
