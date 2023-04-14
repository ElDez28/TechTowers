const AutoChangingHeader = ({ index, text, changingIndex, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        changingIndex === index
          ? "bg-[#1977cc]  text-gray-100"
          : "bg-transparent"
      } px-12 py-2 w-full transition-all duration-500 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default AutoChangingHeader;
