import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import Buildings from "./buildings/Buildings";
import initLanguage from "../utils/initLanguage";

initLanguage();

const firebaseConfig = {

};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Route path="/:lg">
          <Buildings />
        </Route>
      </Router>
    </FirebaseAppProvider>
  );
}

export default App;
