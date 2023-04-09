import React from "react";

const SuccessItems = ({ title, text, image }) => {
  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      <div className="flex-2 flex flex-col text-gray-700 lg:text-left order-last lg:order-first text-center">
        <h3 className=" font-semibold text-4xl mb-4">{title}</h3>
        <p className="italic">{text}</p>
      </div>
      <div className="flex-1 order-first lg:order-last">
        <img src={image}></img>
      </div>
    </div>
  );
};

export default SuccessItems;
