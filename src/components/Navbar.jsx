import { useState } from "react";
import Destoplinks from "./Desktoplinks";
import MobileToggle from "./MobileToggle";
import TitleText from "./TitleText";
import MobileNav from "./MobileNav";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto py-2 px-6 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo or Brand Name */}
            <TitleText title="Dave's" span="Portfolio" />

            {/* Desktop Navigation Links */}
            <Destoplinks />

            {/* Mobile nav toggle */}
            <MobileToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>
    </>
  );
}

export default Navbar;
