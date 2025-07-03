import Abouts from "../components/Abouts";
import Gallery from "../components/Gallery";
import ScrollFadeIn from "../components/ScrollFadeIn";

function AboutMe() {
  return (
    <>
      <ScrollFadeIn>
        <Gallery />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Abouts />
      </ScrollFadeIn>
    </>
  );
}

export default AboutMe;
