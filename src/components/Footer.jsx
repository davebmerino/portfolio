import logo from "../images/D..png";
import SocialMedia from "./SocialMedia";
import SubTitle from "./SubTitle";

function Footer() {
  return (
    <footer className="w-full bg-[#1e293b] text-[#e2e8f0] py-10 px-4 mt-25">
      <div className="max-w-6xl mx-auto mb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-35 h-25" />
          <div>
            <SubTitle subTitle="Dave B. Merino" />
            <p className="text-sm text-[#cbd5e1]">Feel free to reach out!</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-sm">📞 +63995 345 8131</p>
          <p className="text-sm text-[#f5b754] hover:underline">
            📧 daveb.merino@gmail.com
          </p>
        </div>

        <div>
          <h5 className="text-md font-semibold">My Social Media</h5>
          <SocialMedia />
        </div>
      </div>
      <div className="border-t border-[#334155] mt-8 pt-6 text-center text-sm text-[#94a3b8]">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dave B. Merino's Portfolio. All
          rights reserved.
        </p>
        <p className="text-xs mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
