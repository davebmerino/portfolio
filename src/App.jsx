import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/AboutMe";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { motion, useScroll } from "framer-motion";
import ScrollFadeIn from "./components/ScrollFadeIn";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollToTop />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#e0a841",
        }}
      />
      <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-opacity duration-700">
        <Navbar />

        <div className="container mx-auto ">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about-me" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>

        <ScrollFadeIn>
          <Footer />
        </ScrollFadeIn>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
