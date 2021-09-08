import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import BuildingsPage from "./buildings/BuildingsPage";
import initLanguage from "../utils/initLanguage";

initLanguage();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID,
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Route path="/:lg">
          <BuildingsPage />
        </Route>
      </Router>
    </FirebaseAppProvider>
  );
}

export default App;
