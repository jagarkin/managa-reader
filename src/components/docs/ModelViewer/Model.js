import React, { useEffect, useState } from "react";
import { extend } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Model = ({ path }) => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load(path, setModel);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return model ? <primitive object={model.scene} /> : null;
};

export default Model;
