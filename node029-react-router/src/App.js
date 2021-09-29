// Top level App component
import React from "react";
import { ProvideAuth } from "./use-auth.js";
import Nav from "./Nav";

function App(props) {
  return (
    <ProvideAuth>
      <Nav />
    </ProvideAuth>
  );
}

export default App;