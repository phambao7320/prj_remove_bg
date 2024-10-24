import { assets } from "@assets/index";
import React, { useState } from "react";

const ToggleRemoveImage = () => {
  const [position, setPosition] = useState(30);

  const handleChangePosition = (value: number | string) => {
    setPosition(Number(value));
  };

  return (
    <div className="relative rounded-xl">
      <img
        src={assets.image_w_bg}
        style={{ clipPath: `inset(0 ${100.2 - position}% 0 0)` }}
      />
      <img
        src={assets.image_wo_bg}
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        className="absolute left-0 top-0"
      />
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => handleChangePosition(e.target.value)}
        className="slider"
      />
    </div>
  );
};

export default ToggleRemoveImage;
