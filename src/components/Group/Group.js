

import React from "react";
import "./style.css";

export const Group = ({ className,main_text,now_cost,old_cost,discount }) => {
  return (
    <div className={`group ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">{main_text??'Galaxy S22 Ultra'}</div>
        <img className="line" alt="Line" src="/img/line-26.svg" />
        <div className="div">{now_cost??'329 espees'}</div>
        <div className="text-wrapper-2">{old_cost??'749 espees'}</div>
      </div>
      <img className="image" alt="Image" src="/img/image-3.png" />
      <div className="overlap">
        <div className="text-wrapper-3">{discount??'56% OFF'}</div>
      </div>
    </div>
  );
};
