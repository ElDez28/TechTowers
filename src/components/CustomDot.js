import React from "react";
import PropTypes from "prop-types";

const CustomDot = ({ onMove, index, onClick, active }) => {
  const dotColor = active ? "#1846ac" : "transparent";
  const borderColor = "#1846ac";
  const dotSize = 13;

  return (
    <div
      style={{
        backgroundColor: dotColor,
        width: dotSize,
        height: dotSize,
        borderRadius: "50%",
        border: `1px solid ${borderColor}`,
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    ></div>
  );
};

CustomDot.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CustomDot;
