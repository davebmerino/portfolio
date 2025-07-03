import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  const handleHireMeClick = useCallback(() => {
    navigate("/?scrollToContact=true");
  }, [navigate]);

  return (
    <>
      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white w-full  ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#f5b754] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-me"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#f5b754] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
              }
            >
              About Me
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-[#f5b754] font-semibold" : "text-[#0f172a]"
                } hover:text-white hover:bg-gray-700`
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
        </div>
      )}
    </>
  );
}
