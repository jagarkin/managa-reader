import React from "react";

// styled component
import styled from "styled-components";
import { FaBeer, FaFile } from "react-icons/fa";

const useMenu = () => {
  const Items = [
    { path: "/", name: "home", icon: <FaBeer /> },
    { path: "/about", name: "about", icon: <FaFile /> },
  ];

  return (
    <>
      <Container>
        <Text>Menu</Text>
        <List>
          {Items.map((item, index) => {
            return <MenuItem key={index}></MenuItem>;
          })}
        </List>
      </Container>
    </>
  );
};

export default useMenu;

// styled componenet

const Container = styled.div``;

const Text = styled.h2``;

const List = styled.ul``;

const MenuItem = styled.li``;
