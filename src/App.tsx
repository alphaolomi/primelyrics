import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "react-bootstrap-v5/lib/Container";
import AppNavbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import About from "./pages/About";

import "./App.scss";

import ContextController from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <AppNavbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/about" component={About} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </Container>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
