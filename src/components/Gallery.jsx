import Slider from "react-slick";
import GalleryImg from "./GalleryImg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../images/gallimg1.jpg";
import Image2 from "../images/gallimg2.jpg";
import Image3 from "../images/gallimg3.webp";
import Image4 from "../images/gallimg4.jpg";
import Image5 from "../images/gallimg5.jpeg";
import Image6 from "../images/gallimg6.JPG";
import Image7 from "../images/gallimg7.jpg";

function Gallery() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

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
            {images.map((src, index) => (
              <GalleryImg key={index} src={src} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Gallery;
