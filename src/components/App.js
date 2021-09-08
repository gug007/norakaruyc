import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BuildingsPage from "./buildings/BuildingsPage";
import initLanguage from "../utils/initLanguage";

initLanguage();

const basename =
  window.location.pathname.split("/")[1] === "norakaruyc"
    ? "/norakaruyc"
    : undefined;

function App() {
  return (
    <Router basename={basename}>
      <Route path="/:lg">
        <BuildingsPage />
      </Route>
    </Router>
  );
}

export default App;
