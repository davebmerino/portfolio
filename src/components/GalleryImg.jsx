function GalleryImg({ src }) {
  return (
    <>
      <div className="p-4 ">
        <div className="border border-[#f5b754] rounded-xl overflow-hidden shadow-md p-2">
          <img
            src={src}
            alt="Gallery Image"
            className="w-full h-70 rounded-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}

export default GalleryImg;
