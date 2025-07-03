function TitleText({ title, span }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#1b1b1b]  ">
        {title} <span className="text-[#f5b754]">{span}</span>
      </h1>
    </>
  );
}

export default TitleText;
