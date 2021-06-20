import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Team from './components/Team';
import AreWeThereYet from './components/AreWeThereYet';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/are-we-there-yet">
            <AreWeThereYet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
