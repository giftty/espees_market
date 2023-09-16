/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FilterBig = ({ className }) => {
  return (
    <svg
      className={`filter-big ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.6024 8.67358L20.743 8.67358"
        stroke="#33302E"
        strokeLinecap="round"
        strokeWidth="1.80556"
      />
      <path
        className="path"
        d="M4.49304 16.7986L14.6493 16.7986"
        stroke="#33302E"
        strokeLinecap="round"
        strokeWidth="1.80556"
      />
      <ellipse
        className="ellipse-14"
        cx="7.53992"
        cy="8.67358"
        rx="3.04688"
        ry="3.04687"
        stroke="#33302E"
        strokeLinecap="round"
        strokeWidth="1.80556"
        transform="rotate(90 7.53992 8.67358)"
      />
      <ellipse
        className="ellipse-14"
        cx="17.6962"
        cy="16.7986"
        rx="3.04688"
        ry="3.04688"
        stroke="#33302E"
        strokeLinecap="round"
        strokeWidth="1.80556"
        transform="rotate(90 17.6962 16.7986)"
      />
    </svg>
  );
};
