import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../auth/AuthContext";

// style component
import styled from "styled-components";
import { message, Button } from "antd";
import { AiFillGithub } from "react-icons/ai";

const LoginGithub = () => {
  const history = useHistory();
  const { signInWithGithub } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGithub();
      history.push("/bookmarks");
      message.success("your are connected", 2.5);
    } catch {
      message.error("shoot ...", 2.5);
    }
  };

  return (
    <>
      <StyledButton onClick={handleLogin} type="primary" danger>
        <Icon />
        Connect using github
      </StyledButton>
    </>
  );
};

export default LoginGithub;

const StyledButton = styled(Button)`
  display: flex;
  border: #24292e;
  margin: 0.5rem 0rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  background-color: #24292e !important ;

  &:hover {
    border: #41576d;
    background-color: #41576d !important ;
  }
`;

const Icon = styled(AiFillGithub)`
  font-size: 1rem;
  margin-right: 1rem;
`;
