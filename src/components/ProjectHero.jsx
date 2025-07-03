import Slider from "react-slick";
import GalleryImg from "./GalleryImg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectHero({ projectData }) {
  //slick Slider
  const settings = {
    infinite: true,
    autoplay: true,

    speed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 849,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <section className=" max-w-5xl mx-auto bg-[#f2f2f2] rounded-lg shadow-lg p-10  mt-30 ">
        <div className=" w-full max-w-4xl mx-auto px-2">
          <Slider {...settings}>
            {projectData.map((data, index) => (
              <GalleryImg key={index} src={data.image} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default ProjectHero;
