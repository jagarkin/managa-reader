import React from "react";
import { NavLink } from "react-router-dom";

// styled component
import styled from "styled-components";
import {
  AiOutlineMenuFold,
  AiFillHome,
  AiFillInfoCircle,
} from "react-icons/ai";

const useMenu = () => {
  const Items = [
    { path: "/", name: "home", icon: <AiFillHome /> },
    { path: "/about", name: "about", icon: <AiFillInfoCircle /> },
  ];

  const active = {
    color: "#fff",
    backgroundColor: "#1890ff",
  };

  return (
    <>
      <Container>
        <Div>
          <Text>Menu </Text>
          <MenuIcon />
        </Div>

        <List>
          {Items.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Linker exact activeStyle={active} to={item.path}>
                  {item.name}
                  {item.icon}
                </Linker>
              </MenuItem>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default useMenu;

// styled componenet

const Container = styled.div``;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(AiOutlineMenuFold)`
  font-size: 1.5rem;
`;

const Text = styled.h2`
  margin: 0;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 5px;
`;

const List = styled.ul`
  list-style: none;
  margin: 3rem 0rem;
`;

const MenuItem = styled.li`
  margin: 0.8rem 0rem;
`;

const Linker = styled(NavLink)`
  width: 100%;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 10px;
  color: var(--white);
  align-items: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  justify-content: space-between;

  &:hover {
    padding: 10px 25px;
    color: var(--white);
    background-color: var(--coral);
  }
`;
