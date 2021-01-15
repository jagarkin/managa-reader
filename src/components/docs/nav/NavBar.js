import React, { useState } from "react";

// style component
import styled from "styled-components";
import { Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import Menu from "./Menu";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const StyledDrawer = {
    color: "#ffffff",
    backgroundColor: `#1f1f1f`,
  };

  const StyledHeader = {
    color: "#ffffff",
    backgroundColor: `#1f1f1f`,
  };

  return (
    <>
      <Header>
        <Text>apoca</Text>
        <Wrapper>
          <Drawable onClick={showDrawer} />
          <a
            className="exlink"
            href="https://github.com/jagarkin"
            target={"_blank"}
          >
            <GithubIcon />
          </a>
        </Wrapper>
      </Header>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={StyledDrawer}
        footer="hello"
        footerStyle={StyledHeader}
      >
        <Menu />
      </Drawer>
    </>
  );
};

export default NavBar;

// style component

const Header = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .exlink {
    display: flex;
    align-items: center;
  }
`;

const Text = styled.code`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0rem 1rem;
  color: var(--white);
  text-transform: uppercase;
`;

const Drawable = styled(GiHamburgerMenu)`
  cursor: pointer;
  margin: 0rem 1rem;
  font-size: 1.5rem;
  color: var(--white);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--coral);
  }
`;

const GithubIcon = styled(FiGithub)`
  cursor: pointer;
  margin: 0rem 1rem;
  font-size: 1.5rem;
  color: var(--coral);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--magenta);
  }
`;
