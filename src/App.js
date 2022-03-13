import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
// import Research from './components/Research';
import Team from './components/Team';

// TODO: Research
// TODO: Design
// TODO: Nav
// TODO: cleanup
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/team">
            <Team />
          </Route>
          <Route path="/design">
            <Home />
          </Route>
          <Route path="/research">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
