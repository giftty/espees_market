/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CategoriesFilter = ({
  className,
  overlapGroupClassName,
  groupClassName,
  divClassName,
  rectangleClassName,
  vectorClassName,
  vector = "https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/vector-11-1.svg",
  groupClassNameOverride,
  group = "https://cdn.animaapp.com/projects/650197e91fcc5d1ea3e29808/releases/6502fc2f875ec22a96bf51b5/img/group-33141-1@2x.png",
}) => {
  return (
    <div className={`categories-filter ${className}`}>
      <div className={`div ${overlapGroupClassName}`}>
        <div className={`group ${groupClassName}`}>
          <div className={`text-wrapper-2 ${divClassName}`}>Crop Tops</div>
        </div>
        <div className={`rectangle-2 ${rectangleClassName}`} />
        <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
        <img className={`img ${groupClassNameOverride}`} alt="Group" src={group} />
      </div>
    </div>
  );
};

CategoriesFilter.propTypes = {
  vector: PropTypes.string,
  group: PropTypes.string,
};
