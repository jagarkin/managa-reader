import React from "react";
import { useSpring, animated } from "react-spring";

//style component
import styled from "styled-components";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;

const NotFound = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 550, friction: 140 },
  }));

  return (
    <>
      <Wrapper
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Div>
          <animated.div
            className="card1"
            style={{ transform: props.xy.interpolate(trans) }}
          >
            <Pupil />
          </animated.div>
        </Div>
        <Text>You reached the 404, What are your up to ?</Text>
      </Wrapper>
    </>
  );
};

export default NotFound;

// style component

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black);
`;

const Div = styled.div`
  height: 125px;
  width: 250px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: var(--white);

  .card1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    will-change: transform;
    background-color: var(--black);
  }
`;

const Pupil = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
  background-color: var(--white);
`;

const Text = styled.h2`
  margin: 2rem 1rem;
  color: var(--white);
`;
