import React from "react";
import { useAuth } from "../../../auth/AuthContext";

// style component
import styled from "styled-components";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Row } from "antd";

const Panel = () => {
  const { signOut, currentUser } = useAuth();

  return (
    <>
      <Content>
        <Div>
          <UserIcon />
          <Text>{`${currentUser.uid}`.toString().substring(0, 10)}...</Text>
        </Div>
        <Div onClick={signOut}>
          <Text>Logout</Text>
          <LogoutIcon />
        </Div>
      </Content>
    </>
  );
};

export default Panel;

const Content = styled(Row)`
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
`;

const Div = styled.div`
  padding: 10px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h3`
  margin: 0;
  color: var(--white);
  text-transform: lowercase;
`;

const UserIcon = styled(FiUser)`
  margin: 0px 10px;
  font-size: 1.3rem;
  color: var(--white);
`;
const LogoutIcon = styled(FiLogOut)`
  margin: 0px 10px;
  font-size: 1.3rem;
  color: var(--white);
`;
