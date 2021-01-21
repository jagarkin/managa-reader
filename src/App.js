import React from "react";
import "antd/dist/antd.css";
import { Container, GlobalStyle } from "./ThemeStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// utils
import AuthProvider from "./auth/AuthContext";
import NavBar from "./components/utils/nav/NavBar";
// layout
import LandPage from "./components/layout/LandPage";
import About from "./components/layout/About";
import Register from "./components/layout/Register";
import NotFound from "./components/layout/NotFound";
import Bookmarks from "./components/layout/Bookmarks";
import MangaList from "./components/layout/MangaList";
// Controlling Routes
import PrivateRoute from "./Routes/PrivateRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <AuthProvider>
          <Router>
            <NavBar />
            {/* * */}
            <Switch>
              <Route path="/about" component={About} />
              <Route exact path="/" component={LandPage} />
              <Route path="/mangalist" component={MangaList} />
              <ProtectedRoute path="/register" component={Register} />
              <PrivateRoute path="/bookmarks" component={Bookmarks} />
              <Route path="*" component={NotFound} />
            </Switch>
            {/* * */}
          </Router>
        </AuthProvider>
      </Container>
    </>
  );
}

export default App;
