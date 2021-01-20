import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../auth/AuthContext";

// style component
import styled from "styled-components";
import { message, Button } from "antd";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginGoogle = () => {
  const history = useHistory();
  const { signInWithGoogle } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
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
        Connect using google
      </StyledButton>
    </>
  );
};

export default LoginGoogle;

const StyledButton = styled(Button)`
  display: flex;
  margin: 0.5rem 0rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

const Icon = styled(AiOutlineGoogle)`
  font-size: 1rem;
  margin-right: 1rem;
`;
