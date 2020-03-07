import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/about">
            <Nav />

            <About />
          </Route>

          <Route path="/users">
            <Nav />

            <Users />
          </Route>

          <Route path="/">
            <Nav />

            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

