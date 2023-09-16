/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FilterBig1 = ({ color = "#CCD2E3", className }) => {
  return (
    <svg
      className={`filter-big-1 ${className}`}
      fill="none"
      height="27"
      viewBox="0 0 27 27"
      width="27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M12.375 9L22.5 9" stroke={color} strokeLinecap="round" strokeWidth="2" />
      <path className="path" d="M4.5 18L15.75 18" stroke={color} strokeLinecap="round" strokeWidth="2" />
      <ellipse
        className="ellipse-14"
        cx="7.875"
        cy="9"
        rx="3.375"
        ry="3.375"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        transform="rotate(90 7.875 9)"
      />
      <ellipse
        className="ellipse-14"
        cx="19.125"
        cy="18"
        rx="3.375"
        ry="3.375"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        transform="rotate(90 19.125 18)"
      />
    </svg>
  );
};

FilterBig1.propTypes = {
  color: PropTypes.string,
};
