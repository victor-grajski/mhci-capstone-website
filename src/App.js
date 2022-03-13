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

// TODO: Nav
// TODO: cleanup
// TODO: test responsive
// TODO: test links
// TODO: test interactions
// TODO: link hover style
// TODO: test delete index.css
// TODO: test delete <Router><div>
export default function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}
