import React from "react";
import BlurText from "./BlurText/BlurText";

const Loader = () => {
  return (
    <div className="lod-cont flex justify-center items-center h-screen bg-black text-white">
      <BlurText
        text="Crafting Code, Creating Experiences!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-7xl font-bold"
      />
    </div>
  );
};

export default Loader;
