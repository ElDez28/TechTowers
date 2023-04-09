import React from "react";

const GridItem = ({ title, icon, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active
          ? "bg-primary text-white hover:text-white"
          : "bg-white hover:text-cyan-700"
      } flex flex-col items-center transition-all duration-300 cursor-pointer px-6 py-6 shadow-lg text-center`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
  );
};

export default GridItem;
