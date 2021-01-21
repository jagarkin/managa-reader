import React from "react";
import LoginGoogle from "../utils/RegisterButton/LoginGoogle";

// style component
import styled from "styled-components";
import { Row, Typography } from "antd";
import LoginGithub from "../utils/RegisterButton/LoginGithub";

const Register = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Text>why creating accout ?</Text>
          <Para level={2}>
            Manga like any other creative material or any material for that
            matter that is on the internet is copyright protected, so creating
            an account will get you keep a safe environment for your readings
            and help our growth since we are add free.
          </Para>
        </Content>
        <Container>
          <Text>Connecting never been easier</Text>
          <LoginGoogle />
          <LoginGithub />
        </Container>
      </Wrapper>
    </>
  );
};

export default Register;

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
`;

const Content = styled(Row)`
  width: 700px;
  padding-top: 6rem;
  margin: 0rem 2rem;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0rem;
    padding: 10px;
    padding-top: 4rem;
  }
`;

const Text = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const Para = styled(Typography)`
  font-size: 1rem;
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
