import React, { useRef } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <>
      <orbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 2.5}
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
    </>
  );
};

export default Controls;
