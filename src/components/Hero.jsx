import heroBanner from "../images/FB_IMG_1681592145456.jpg";
import SubTitle from "./SubTitle";
import TitleText from "./TitleText";
import Text from "./Text";
import SocialMedia from "./SocialMedia";

import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mx-auto mt-25 justify-center gap-15 w-full h-[90vh] ">
        {/* Hero Section */}
        <div className="relative h-70 w-70 overflow-hidden ">
          <img
            src={heroBanner}
            alt="Hero Background"
            className="absolute inset-0 object-cover w-full h-full  rounded-full border-4 border-[#f5b754]  shadow-lg transition-transform duration-500"
          />
        </div>
        <div className="text-center max-w-2xl">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <SubTitle subTitle="Aspiring Web Developer" />
              <TitleText title="Hi, I'm " span="Dave" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              <Text text="Your Vision, My Code" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            <SocialMedia />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
