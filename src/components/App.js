import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BuildingsPage from "./buildings/BuildingsPage";
import initLanguage from "../utils/initLanguage";

initLanguage();

function App() {
  return (
    <Router>
      <Route path="/:lg?">
        <BuildingsPage />
      </Route>
    </Router>
  );
}

export default App;
