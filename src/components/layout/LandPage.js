import React from "react";
import HeroHeader from "../utils/HeroHeader";
import Viewer from "../utils/ModelViewer/Viewer";

const LandPage = () => {
  return (
    <>
      <HeroHeader hero="apoca planet" />
      <Viewer uri="/space/scene.Gltf" />
    </>
  );
};

export default LandPage;
