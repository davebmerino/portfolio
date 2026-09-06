import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { motion } from "framer-motion";
import About from "../components/About.jsx";

import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Home() {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollToContact") === "true" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Hero />
      </motion.div>

      <ScrollFadeIn>
        <div className="container mx-auto px-4 py-8">
          <Skills />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="container mx-auto px-4 py-8" ref={contactRef}>
          <About />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="container mx-auto px-4 py-8" ref={contactRef}>
          <ContactForm />
        </div>
      </ScrollFadeIn>
    </>
  );
}

export default Home;
