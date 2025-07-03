function ButtonComp({ text }) {
  return (
    <button
      type="submit"
      className="bg-[#f5b754] cursor-pointer hover:bg-[#e0a841] transition-all px-6 py-3 text-white font-medium rounded-full text-sm w-full md:w-auto"
    >
      {text}
    </button>
  );
}

export default ButtonComp;
