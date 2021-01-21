import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/AuthContext";

// styled component
import styled, { ThemeProvider } from "styled-components";
import {
  AiOutlineMenuFold,
  AiFillHome,
  AiFillInfoCircle,
  AiFillBook,
} from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { BsFillBookmarksFill } from "react-icons/bs";

const theme = {
  primary: "#1890ff",
  secondary: "#f5222d",
};

const useMenu = () => {
  const { currentUser } = useAuth();
  const Regsitration = {
    path: "/register",
    name: "account",
    icon: <MdVerifiedUser />,
  };
  const LoggedIn = {
    path: "/bookmarks",
    name: "bookmarks",
    icon: <BsFillBookmarksFill />,
  };

  const Items = [
    { path: "/", name: "home", icon: <AiFillHome /> },
    { path: "/mangalist", name: "manga", icon: <AiFillBook /> },
    currentUser ? { ...LoggedIn } : { ...Regsitration },
    { path: "/about", name: "about", icon: <AiFillInfoCircle /> },
  ];

  const active = {
    color: "#fff",
    backgroundColor: "#1890ff",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
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
    background-image: linear-gradient(
      271deg,
      ${(props) => props.theme.secondary},
      ${(props) => props.theme.primary}
    );
  }
`;
