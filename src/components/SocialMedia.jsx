import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Text from "./Text";

export default function SocialMedia() {
  return (
    <>
      <div className="mt-2">
        <div className="flex justify-center gap-3">
          <a
            href="https://www.facebook.com/daavviidd21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-[#f5b754] hover:text-[#1b1b1b] transition-colors duration-300 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-[#f5b754] hover:text-[#1b1b1b] transition-colors duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/dave-briones-merino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-[#f5b754] hover:text-[#1b1b1b] transition-colors duration-300 cursor-pointer" />
          </a>
          <a
            href="https://github.com/davebmerino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-[#f5b754] hover:text-[#1b1b1b] transition-colors duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}
