import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Buildings from "./buildings/Buildings";
import initLanguage from "../utils/initLanguage";

initLanguage();

function App() {
  return (
    <Router>
      <Route path="/:lg">
        <Buildings />
      </Route>
    </Router>
  );
}

export default App;
