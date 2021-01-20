import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import Controls from "./Controls";

const Box = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: hover ? "gray" : "red",
  });
  const meshRef = useRef();

  console.log(props);

  return (
    <>
      <Controls />
      <a.mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setActive(!active)}
        scale={props.scale}
        castShadow
      >
        <a.boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <a.meshPhysicalMaterial attach="material" color={props.color} />
        {/* we can use Basic or standart mesh and physical if we want to change materials
        <a.meshBasicMaterial attach="material" color={props.color} />
        */}
      </a.mesh>
    </>
  );
};

export default Box;
