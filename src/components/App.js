import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BuildingsPage from "./buildings/BuildingsPage";
import initLanguage from "../utils/initLanguage";
import Building from "./building/App";

initLanguage();

if (
  window.location.hostname !== "localhost" &&
  window.location.protocol === "http:"
) {
  window.location.href = window.location.href.replace("http:", "https:");
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:lg/:id">
          <Building />
        </Route>
        <Route path="/:lg?">
          <BuildingsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
