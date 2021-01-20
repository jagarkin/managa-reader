import React from "react";
import * as THREE from "three";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";

//import Box from "./Box";
//import Plan from "./Plan";
import Model from "./Model";
import Controls from "./Controls";

const Viewer = ({ uri }) => {
  return (
    <>
      <Wrapper>
        <Canvas
          className="canvas"
          shadowMap
          camera={{ position: [0, 0, 20] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[25, 25, 25]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />
          <fog attach="fog" args={["#1890ff", 16, 40]} />
          <Controls />
          <Model path={uri} />
        </Canvas>
      </Wrapper>
    </>
  );
};

export default Viewer;

const Wrapper = styled.div`
  .canvas {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh !important;
    background-color: var(--black);
  }
`;
