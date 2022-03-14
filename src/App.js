import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Research from './components/Research';
import Design from './components/Design';
import Team from './components/Team';

// TODO: Nav max width
export default function App() {
  return (
    <Router>
        <Switch>
        <Route path="/team">
            <Team />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
