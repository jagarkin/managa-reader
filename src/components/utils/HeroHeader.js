import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#1890ff",
  secondary: "#f5222d",
};

const HeroHeader = ({ hero }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Text>{hero}</Text>
      </ThemeProvider>
    </>
  );
};

export default HeroHeader;

export const Text = styled.h1`
  top: 10%;
  z-index: 1;
  width: 100%;
  font-size: 6vw;
  font-weight: 900;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translate(0%, -10%);

  @media (max-width: 768px) {
    font-size: 9vw;
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -moz-text-fill-color: transparent;

  background-image: linear-gradient(
    271deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;
