import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    html,
    body{
        margin: 0px;
        padding: 0px;
        font-family: 'Lato', sans-serif;
    }

    :root {
      --black: #1f1f1f;
      --white: #ffffff;
      --magenta: #f5222d;
      --coral: #1890ff;
    }

`;

export const Container = styled.div`
  max-width: 100%;
  min-height: 100vh;
`;
