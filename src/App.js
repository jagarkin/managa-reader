import React from "react";
import "antd/dist/antd.css";
import { Container, GlobalStyle } from "./ThemeStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/docs/nav/NavBar";

import LandPage from "./components/pages/LandPage";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <NavBar />
          {/* * */}
          <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
          {/* * */}
        </Router>
      </Container>
    </>
  );
}

export default App;
