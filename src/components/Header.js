const Header = ({ title, black = true }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6 px-12 max-w-[90rem]">
      <h2
        className={`xl:text-4xl text-3xl  font-bold ${
          black ? "text-gray-700" : "text-gray-100"
        }`}
      >
        <span className="h-1 text-primary hidden md:inline-block ">━</span>{" "}
        {title}{" "}
        <span className="h-1  text-primary hidden md:inline-block ">━</span>
      </h2>
    </div>
  );
};

export default Header;
